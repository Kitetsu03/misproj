import API from "./api";

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

export const getProfile = async () => {
  const res = await API.get("/auth/profile");
  return res.data;
};

export const deleteUser = async (userId) => {
  const res = await API.delete(`/users/${userId}`);
  return res.data;
};

export const updateUser = async (userId, data) => {
  const res = await API.put(`/users/${userId}`, data);
  return res.data;
};
