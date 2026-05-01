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
  return await User.find().populate("member_id");
};

// GET BY ID
export const getUserByIdService = async (id) => {
  return await User.findById(id).populate("member_id");
};

// UPDATE
export const updateUserService = async (id, data) => {
  const user = await User.findById(id);
  if (!user) return null;
  Object.assign(user, data);
  return await user.save();
};

// DELETE
export const deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};
