import API from "./api";

export const getMembers = async () => {
  const res = await API.get("/members");
  return res.data;
};

export const createMember = async (data) => {
  const res = await API.post("/members", data);
  return res.data;
};

export const updateMember = async ({ id, data }) => {
  const res = await API.put(`/members/${id}`, data);
  return res.data;
};

export const deleteMember = async (id) => {
  const res = await API.delete(`/members/${id}`);
  return res.data;
};
