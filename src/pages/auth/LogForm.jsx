import { loginPatterns } from "../auth/js/utils/patterns.js";
import validateAll from "../auth/js/utils/validator.js";
import {
  checkSession,
  startSession,
  getCurrentUser,
} from "../auth/js/module/Session.js";
import { loginUser } from "../../services/authService.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";

function LogForm({ currentSession, setLoaderVisible }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [isRemember, setIsRemember] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { username, password } = formData;

  function SessionGate() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      const verifySession = async () => {
        const currentSession = await checkSession(getCurrentUser());

        if (currentSession) {
          setTimeout(() => {
            navigate("/admin");
          }, 1500);
        } else {
          setLoading(false);
        }
      };

      verifySession();
    }, [navigate]);

    if (loading) {
      return <div className="loader" />;
    }

    return (
      <LogForm currentSession={false} setLoaderVisible={setLoaderVisible} />
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login form with:", { username, password });
    const values = { username, password };
    const validated = validateAll(values, loginPatterns);

    if (validated.length > 0) {
      setSnackbarMessage(validated.join("\n"));
      setSnackbarSeverity("warning");
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await loginUser({
        username: username,
        passkey: password,
      });

      const { token, user } = response;

      // STORE AUTH DATA
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setSnackbarMessage("Logged in successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      setTimeout(() => {
        const role = user?.role;

        switch (role) {
          case "admin":
            setSnackbarMessage("Welcome to Dashboard Admin!");
            setSnackbarSeverity("success");
            setOpenSnackbar(true);
            navigate("/admin");
            break;

          case "gatekeeper":
            setSnackbarMessage("Welcome to Dashboard Gatekeeper!");
            setSnackbarSeverity("success");
            setOpenSnackbar(true);
            navigate("/gatekeeper");
            break;

          case "member":
            setSnackbarMessage("Welcome to members portal!");
            setSnackbarSeverity("success");
            setOpenSnackbar(true);
            navigate("/member");
            break;

          default:
            setSnackbarMessage("Unknown role. Contact admin.");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            navigate("/");
        }
      }, 800);
    } catch (error) {
      const backendMessage =
        error.response?.data?.errors?.join("\n") ||
        error.response?.data?.message ||
        "Login failed. Please try again.";

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
      <div className="container h-full w-full absolute top-[50%] left-[50%] -translate-[50%] md:h-fit md:w-120 xl:w-150 flex justify-center content-center">
        <div className="card rounded-2xl w-[95dvw] md:w-full pt-5">
          <div className="card-header">
            <div className="my-logo justify-center"></div>

            <h2 className="cursor-default text-center pb-2 text-[min(5vw,20px)] md:text-[min(5vw,30px)]">
              LOGIN ACCOUNT
            </h2>
            <hr className="p-1 border-white bg-white" />
          </div>

          <form
            onSubmit={handleSubmit}
            method="POST"
            className="card-body p-5 flex-row gap-4 text-[min(5vw,15px)] md:text-[min(5vw,20px)]"
          >
            <div className="form-group">
              <input
                id="username"
                className="form-control"
                name="username"
                type="text"
                placeholder=" "
                value={username}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, username: e.target.value }))
                }
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-group">
              <input
                id="password"
                className="form-control"
                name="password"
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="card-footer flex flex-col justify-center items-center">
              <button
                className="submit cursor-pointer bg-blue-500 text-white p-1 mt-2"
                name="submit"
                type="submit"
              >
                Login Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogForm;
