import "../css/reglog.css";
import { Link } from "react-router-dom";

function LogForm() {
  return (
    <div className="container absolute top-[50%] left-[50%] -translate-[50%] w-100 md:w-120 xl:w-150 flex justify-center content-center">
      <div className="card rounded-2xl w-[95dvw] md:w-full pt-5">
        <div className="card-header">
          <div className="my-logo justify-center"></div>
          <h2 className="cursor-default text-center pb-2 text-[min(5vw,20px)] md:text-[min(5vw,30px)]">
            LOGIN ACCOUNT
          </h2>
          <hr className="p-1 border-white bg-white" />
        </div>
        <div className="card-body p-5 flex-row gap-4 text-[min(5vw,15px)] md:text-[min(5vw,20px)]">
          <div className="form-group">
            <input
              id="email"
              className="form-control"
              name="email"
              type="email"
              placeholder=" "
              required
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
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="card-footer flex-col justify-center items-center">
            <Link to="/admin">
              <button
                className="submit cursor-pointer bg-blue-500 text-white p-1 mt-2"
                name="submit"
                type="submit"
              >
                Login Account
              </button>
            </Link>
            <Link to="/register">
              <a className="cursor-pointer login flex justify-center items-center mt-4 hover:text-cyan-800 opacity-70">
                Create an account?
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogForm;
