import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Member from "../models/member.model.js";

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

    // find user
    const user = await User.findOne({ username }).populate("member_id");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // check password
    const isMatch = await bcrypt.compare(passkey, user.passkey);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // create token
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.json({
      message: "Login successful",
      token,
      user,
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

export { register, login, getProfile };
