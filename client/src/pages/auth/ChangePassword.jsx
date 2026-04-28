import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Input } from "../../components/ui/input/Input.jsx";
import { changePassword } from "../../utils/auth.service.js";

function ChangePassword() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const { currentPassword, newPassword, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showMessage = (message, severity = "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      return showMessage("All fields are required.", "warning");
    }

    if (newPassword.length < 8) {
      return showMessage(
        "New password must be at least 8 characters long.",
        "warning",
      );
    }

    if (newPassword !== confirmPassword) {
      return showMessage("Passwords do not match.", "warning");
    }

    try {
      setLoading(true);

      const response = await changePassword({
        userId: user._id,
        currentPassword,
        newPassword,
      });

      showMessage(response.message || "Password changed successfully!");

      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      }, 1500);
    } catch (error) {
      const backendMessage =
        error.response?.data?.message ||
        "Failed to change password. Please try again.";

      showMessage(backendMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
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

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Change Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Current Password"
            id="currentPassword"
            name="currentPassword"
            type="password"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={handleChange}
          />

          <Input
            label="New Password"
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={handleChange}
          />

          <Input
            label="Confirm New Password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? (
              <span className="flex justify-center items-center gap-2">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                Updating...
              </span>
            ) : (
              "Change Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
