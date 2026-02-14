export const loginPatterns = [
  {
    id: "email",
    required: true,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: {
      required: "Username is required.",
      pattern: "Please enter a valid email address.",
    },
  },
  {
    id: "password",
    required: true,
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\\\[\]{};:'",.<>\/?]).{8,}$/,
    message: {
      required: "Password is required.",
      pattern:
        "Password must have at least 8 characters, one uppercase, one lowercase, one digit,one special character.",
    },
  },
];
