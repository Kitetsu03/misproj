import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../back_end/services/authService.js";

function RegForm() {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const role = document.getElementById("role").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await registerUser({ role, username, passkey: password });
      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <>
      <div className="container absolute top-[50%] left-[50%] w-100 md:w-120 xl:w-150 -translate-[50%] flex justify-center content-center">
        <div className="card shadow-2xl rounded-3xl w-dvw sm:w-dvw md:w-[95dvw] xl:w-full pt-5">
          <div className="card-header">
            <div className="my-logo justify-center"></div>
            <h2 className="cursor-default text-center pb-2 text-[min(5vw,20px)] md:text-[min(5vw,30px)]">
              REGISTER ACCOUNT
            </h2>
            <hr className="p-1 border-white bg-white" />
          </div>
          <div className="card-body p-5 flex-row gap-4 text-[min(5vw,15px)] md:text-[min(5vw,20px)]">
            <form action="post">
              <div className="form-group">
                <input
                  id="username"
                  className="form-control"
                  name="username"
                  type="text"
                  placeholder=" "
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-group">
                <input
                  id="password"
                  className="form-control"
                  name="password"
                  type="password"
                  placeholder=" "
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-group">
                <input
                  id="confirm-password"
                  className="form-control"
                  name="confirm-password"
                  type="password"
                  placeholder=" "
                />
                <label htmlFor="confirm-password">Confirm password</label>
              </div>
              <div className="form-group font-secondary">
                <select name="role" id="role">
                  <option value="gatekeeper">gatekeeper</option>
                  <option value="member">member</option>
                </select>
              </div>
              <div className="card-footer flex-col justify-center items-center">
                <button
                  onClick={handleRegister}
                  className="submit cursor-pointer bg-blue-500 text-white p-1 mt-2"
                  name="submit"
                  type="button"
                >
                  Confirm Register
                </button>
                <Link to="/">
                  <a className="login cursor-pointer flex justify-center items-center mt-4 hover:text-cyan-800 opacity-70">
                    Close
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegForm;
