import Member from "./member.model.js";

export const getMembersService = async () => {
  return await Member.find();
};
