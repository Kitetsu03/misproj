import { User } from "../models/User.js";
import { data } from "../../../../data/users_data.js";

const Authenticate = ({ cleanEmail, cleanPassword }) => {
  let authUser = null;
  let role = null;

  data.forEach((user) => {
    if (user.email == cleanEmail && user.password == cleanPassword) {
      role = user.role;
      authUser = new User(user);
      return;
    }
  });

  return { user: authUser, role: role };
};

export { Authenticate };
