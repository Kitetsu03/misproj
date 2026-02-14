import { User } from "../models/User.js";
import { data } from "../../../../data/users_data.js";

const Authenticate = ({ cleanEmail, cleanPassword }) => {
  let authUser = null;

  data.forEach((user) => {
    if (user.email == cleanEmail && user.password == cleanPassword) {
      console.log("User authenticated successfully:", user.role);
      authUser = new User(user);
      return;
    }
  });

  return authUser;
};

export { Authenticate };
