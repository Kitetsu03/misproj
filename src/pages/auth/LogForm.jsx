import { loginPatterns } from "../auth/js/utils/patterns.js";
import validateAll from "../auth/js/utils/validator.js";
import {
  checkSession,
  startSession,
  getCurrentUser,
} from "../auth/js/module/Session.js";
import { Authenticate } from "../auth/js/module/Authentication.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function LogForm({ currentSession, setLoaderVisible }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isRemember, setIsRemember] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password };
    const validated = validateAll(formData, loginPatterns);

    if (validated.length > 0) {
      setErrors(validated);
      setSnackbarMessage(validated.join("\n"));
      setSnackbarSeverity("warning");
      setOpenSnackbar(true);
      console.log(validated);
    } else {
      const cleanEmail = email.trim();
      const cleanPassword = password.trim();

      let authUser = Authenticate({ cleanEmail, cleanPassword });
      let role = authUser.role;

      if (authUser && authUser !== null) {
        authUser.password = null;
        console.log("Authenticated Successfully", "success");
        startSession(authUser);
        console.log(authUser);
        setTimeout(() => {
          if (role === undefined || role === null) {
            alert("Unknown user role. Please contact support.");
            navigate("/");
          } else if (role === "admin") {
            navigate("/admin");
          } else if (role === "gatekeeper") {
            navigate("/gatekeeper");
          } else if (role === "member") {
            navigate("/member");
          }
        }, 1500);
      } else {
        console.log("Invalid email or password. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="h-auto">
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
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
                id="email"
                className="form-control"
                name="email"
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
