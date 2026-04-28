// CHANGE PASSWORD SERVICE
export const changePassword = async (data) => {
  const response = await API.put("/auth/change-password", data);
  return response.data;
};
