import User from "../user/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// VALIDATION
const validateLoginPayload = ({ username, passkey }) => {
  const errors = [];

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!username || typeof username !== "string" || !username.trim()) {
    errors.push("Username is required.");
  } else if (!emailPattern.test(username)) {
    errors.push("Please enter a valid email address.");
  }

  if (!passkey || typeof passkey !== "string" || !passkey.trim()) {
    errors.push("Password is required.");
  }

  return errors;
};

// REGISTER SERVICE
export const registerService = async (data) => {
  let { username, passkey, role, member_id } = data;

  username = username?.trim();
  passkey = passkey?.trim();

  const validationErrors = validateLoginPayload({ username, passkey });
  if (validationErrors.length > 0) {
    throw { status: 400, errors: validationErrors };
  }

  const allowedRoles = ["admin", "gatekeeper", "member"];
  if (!allowedRoles.includes(role)) {
    throw { status: 400, message: "Invalid role provided" };
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw { status: 400, message: "Username already exists" };
  }

  const hashedPassword = await bcrypt.hash(passkey, 10);

  const user = await User.create({
    username,
    passkey: hashedPassword,
    role,
    member_id: member_id || null,
  });

  const userSafe = user.toObject();
  delete userSafe.passkey;

  return userSafe;
};

// LOGIN SERVICE
export const loginService = async ({ username, passkey }) => {
  const validationErrors = validateLoginPayload({ username, passkey });

  if (validationErrors.length > 0) {
    throw { status: 400, errors: validationErrors };
  }

  const user = await User.findOne({ username }).populate("member_id");

  if (!user) {
    throw { status: 400, errors: ["Invalid username or password."] };
  }

  const isMatch = await bcrypt.compare(passkey, user.passkey);

  if (!isMatch) {
    throw { status: 400, errors: ["Invalid username or password."] };
  }

  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "1d" },
  );

  const userSafe = user.toObject();
  delete userSafe.passkey;

  return { token, user: userSafe };
};

// PROFILE SERVICE
export const getProfileService = async (userId) => {
  return await User.findById(userId).populate("member_id");
};

// DELETE USER SERVICE
export const deleteUserService = async (id) => {
  await User.findByIdAndDelete(id);
};

// UPDATE USER SERVICE
export const updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, {
    new: true,
  }).populate("member_id");
};
