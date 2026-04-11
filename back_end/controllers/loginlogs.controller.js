import LoginLog from "../models/log.model.js";

export const logLogin = async (user_id) => {
  try {
    await LoginLog.create({ user_id });
  } catch (err) {
    console.error(err);
  }
};
