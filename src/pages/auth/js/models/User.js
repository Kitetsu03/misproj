export class User {
  constructor({ email, password, fullName, isRemembered = false }) {
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.isRemembered = isRemembered;
    this.role = null;
  }

  getFullName() {
    return this.fullName;
  }

  getRole() {
    return this.role;
  }

  authenticate(users) {
    users.forEach((user) => {
      if (
        user.email === email &&
        user.password === password &&
        user.role === role
      ) {
        authUser = new User(user);
        console.log("User authenticated successfully:", role);
        return;
      }
    });
  }
}
