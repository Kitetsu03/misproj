import axios from "axios";

const API = axios.create({
<<<<<<< HEAD
  baseURL:
    "http://localhost:3000/api" ||
    import.meta.env.VITE_API_URL ||
    "http://localhost:3000/api",
=======
  baseURL: import.meta.env.VITE_API_URL,
>>>>>>> 5a8ce6ecd206792f81f18555316a0b698640ca35
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers = req.headers || {};
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// Handle global errors
API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      const message = err.response?.data?.message;

      if (message === "Invalid token" || message === "No token provided") {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    }
    return Promise.reject(err);
  },
);

export default API;
