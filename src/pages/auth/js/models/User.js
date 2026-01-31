export class User {
  constructor({ username, password, fullName, isRemembered = false }) {
    this.username = username;
    this.password = password;
    this.fullName = fullName;
    this.isRemembered = isRemembered;
  }

  getFullName() {
    return this.fullName;
  }

  authenticate(users) {
    users.forEach((user) => {
      if (user.username === username && user.password === password) {
        authUser = new User(user);
        return;
      }
    });
  }
}
