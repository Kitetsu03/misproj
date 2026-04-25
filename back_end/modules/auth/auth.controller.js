import {
  registerService,
  loginService,
  getProfileService,
  deleteUserService,
  updateUserService,
} from "./auth.service.js";

export const register = async (req, res) => {
  try {
    const user = await registerService(req.body);
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    res.status(err.status || 500).json(err);
  }
};

export const login = async (req, res) => {
  try {
    const { token, user } = await loginService(req.body);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.json({
      message: "Login successful",
      token,
      user,
    });
  } catch (err) {
    res.status(err.status || 500).json(err);
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await getProfileService(req.user.userId);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await deleteUserService(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updated = await updateUserService(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
