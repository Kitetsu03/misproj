import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../input/Input.jsx";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { registerPatterns, loginPatterns } from "../../../utils/patterns.js";
import validateAll from "../../../utils/validator.js";
import { registerUser } from "../../../services/authService.js";

function CreateNewUser() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleRegister = async (e) => {
    e.preventDefault();

    const values = {
      username: email,
      password,
      confirmPassword,
      role,
    };

    const combinedPatterns = [...loginPatterns, ...registerPatterns];
    const errors = validateAll(values, combinedPatterns);

    if (errors.length > 0) {
      setSnackbarMessage(errors.join("\n"));
      setSnackbarSeverity("warning");
      setOpenSnackbar(true);
      return;
    }

    try {
      await registerUser({
        username: email,
        passkey: password,
        role,
      });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("");
      setSnackbarMessage("User registered successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error) {
      const backendMessage =
        error.response?.data?.errors?.join("\n") ||
        error.response?.data?.message ||
        "Registration failed. Please try again.";

      setSnackbarMessage(backendMessage);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };
  return (
    <>
      <div className="h-auto">
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={snackbarSeverity}
            variant="filled"
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
      <div className="bg-white p-3 rounded-2xl max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Create New User</h1>
          <p className="text-gray-500 text-sm">
            Add a new user to the church management system.
          </p>
        </header>

        <form onSubmit={handleRegister}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              id="username"
              type="text"
              label="Email"
              name="username"
              value={email}
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              id="password"
              type="password"
              label="Password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              id="confirm-password"
              type="password"
              label="Confirm Password"
              name="confirm-password"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Role select */}
            <div className="md:col-span-2 space-y-1">
              <label className="font-medium">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 border rounded-lg text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Role</option>
                <option value="gatekeeper">Gatekeeper</option>
                <option value="member">Member</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <button
              type="submit"
              disabled={!email || !password || !role}
              className="px-5 py-2 rounded-lg font-secondary bg-black text-white hover:bg-gray-800 disabled:opacity-50"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateNewUser;
