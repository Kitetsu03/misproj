import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Member from "../models/member.model.js";

const validateLoginPayload = ({ username, passkey }) => {
  const errors = [];
  if (!username || typeof username !== "string" || !username.trim()) {
    errors.push("Username is required.");
  }
  if (!passkey || typeof passkey !== "string" || !passkey.trim()) {
    errors.push("Password is required.");
  } else if (passkey.trim().length < 6) {
    errors.push("Password must be at least 6 characters.");
  }
  return errors;
};

// ======================
// REGISTER USER
// ======================
const register = async (req, res) => {
  try {
    const { username, passkey, role, member_id } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(passkey, 10);

    const user = await User.create({
      username,
      passkey: hashedPassword,
      role,
      member_id,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// # ======================
// # LOGIN USER
// # ======================
const login = async (req, res) => {
  try {
    const { username, passkey } = req.body;

    const validationErrors = validateLoginPayload({ username, passkey });
    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    const user = await User.findOne({ username }).populate("member_id");
    if (!user) {
      return res
        .status(400)
        .json({ errors: ["Invalid username or password."] });
    }

    const isMatch = await bcrypt.compare(passkey, user.passkey);
    if (!isMatch) {
      return res
        .status(400)
        .json({ errors: ["Invalid username or password."] });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    const userSafe = user.toObject();
    delete userSafe.passkey;

    res.json({
      message: "Login successful",
      token,
      user: userSafe,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// # ======================
// # GET PROFILE (AUTH USER)
// # ======================
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate("member_id");

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("member_id");
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { register, login, getProfile, deleteUser, updateUser };
