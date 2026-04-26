export const loginPatterns = [
  {
    id: "username",
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
        "Password must have at least 8 characters, one uppercase, one lowercase, one digit, one special character.",
    },
  },
];
export const registerPatterns = [
  {
    id: "confirmPassword",
    required: true,
    custom: (value, values) =>
      value === values.password || "Passwords do not match.",
    message: {
      required: "Confirm password is required.",
    },
  },

  {
    id: "role",
    required: true,
    custom: (value) =>
      ["admin", "gatekeeper", "member"].includes(value) ||
      "Invalid role selected.",
    message: {
      required: "Role is required.",
    },
  },
];

export const memberPatterns = [
  {
    field: "firstName",
    test: (value) => value.trim().length >= 2,
    message: "First name must be at least 2 characters.",
  },
  {
    field: "lastName",
    test: (value) => value.trim().length >= 2,
    message: "Last name must be at least 2 characters.",
  },
  {
    field: "email",
    test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: "Invalid email format.",
  },
  {
    field: "phoneNumber",
    test: (value) => /^09\d{9}$/.test(value),
    message: "Phone number must be valid PH mobile format.",
  },
  {
    field: "maritalStatus",
    test: (value) => value.trim().length > 0,
    message: "Marital status is required.",
  },
  {
    field: "lifeGroup",
    test: (value) => value.trim().length > 0,
    message: "LifeGroup is required.",
  },
];
