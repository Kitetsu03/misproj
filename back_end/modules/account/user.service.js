import User from "./user.model.js";

// CREATE
export const createUserService = async (data) => {
  const existingUser = await User.findOne({ username: data.username });

  if (existingUser) {
    throw new Error("User already exists");
  }

  return await User.create(data);
};

// GET ALL
export const getUsersService = async () => {
  const users = await User.find()
    .select("-passkey") // Hide password hash
    .populate("member_id");

  return users.map((user) => ({
    _id: user._id,
    username: user.username,
    role: user.role,
    member_id: user.member_id,
    mustChangePassword: user.mustChangePassword,
    is_enabled: user.is_enabled,
    created_by: user.created_by,
    updated_by: user.updated_by,

    lastLogin: user.lastLogin
      ? new Date(user.lastLogin).toLocaleString("en-PH", {
          dateStyle: "medium",
          timeStyle: "short",
        })
      : "Never Logged In",

    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }));
};

// GET BY ID
export const getUserByIdService = async (id) => {
  const user = await User.findById(id).select("-passkey").populate("member_id");

  if (!user) {
    throw new Error("User not found");
  }

  return {
    _id: user._id,
    username: user.username,
    role: user.role,
    member_id: user.member_id,
    mustChangePassword: user.mustChangePassword,
    is_enabled: user.is_enabled,
    created_by: user.created_by,
    updated_by: user.updated_by,

    lastLogin: user.lastLogin
      ? new Date(user.lastLogin).toLocaleString("en-PH", {
          dateStyle: "medium",
          timeStyle: "short",
        })
      : "Never Logged In",

    createdAt: user.createdAt
      ? new Date(user.createdAt).toLocaleString("en-PH", {
          dateStyle: "medium",
          timeStyle: "short",
        })
      : "N/A",
    updatedAt: user.updatedAt
      ? new Date(user.updatedAt).toLocaleString("en-PH", {
          dateStyle: "medium",
          timeStyle: "short",
        })
      : "N/A",
  };
};

// UPDATE
export const updateUserService = async (id, data) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  Object.assign(user, data);

  const updatedUser = await user.save();

  return {
    message: "User updated successfully",
    user: {
      _id: updatedUser._id,
      username: updatedUser.username,
      role: updatedUser.role,
      member_id: updatedUser.member_id,
      mustChangePassword: updatedUser.mustChangePassword,
      is_enabled: updatedUser.is_enabled,
      lastLogin: updatedUser.lastLogin
        ? new Date(updatedUser.lastLogin).toLocaleString("en-PH", {
            dateStyle: "medium",
            timeStyle: "short",
          })
        : "Never Logged In",
      updatedAt: updatedUser.updatedAt
        ? new Date(updatedUser.updatedAt).toLocaleString("en-PH", {
            dateStyle: "medium",
            timeStyle: "short",
          })
        : "N/A",
    },
  };
};

// DELETE
export const deleteUserService = async (id) => {
  const deletedUser = await User.findByIdAndDelete(id);

  if (!deletedUser) {
    throw new Error("User not found");
  }

  return deletedUser;
};
