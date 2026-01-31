import { User } from "../models/User.js";
import { data } from "../../../../data/users_data.js";

const Authenticate = ({ username, password } = {}) => {
  let authUser = null;

  data.forEach((user) => {
    if (user.username === username && user.password === password) {
      authUser = new User(user);
      return;
    }
  });

  return authUser;
};

export { Authenticate };
