import { Chart as Chartjs } from "chart.js/auto";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";

function AdminNav() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const showNavbar = () => {
    setIsOpen((s) => !s);
  };
  return (
    <>
      <div className="">
        <nav
          ref={navRef}
          className={`bg-blue-400 backdrop-blur-[2px] text-white border-white/90 flex flex-col fixed sm:sticky right-0 top-0 h-dvh w-64 transition-transform duration-200 z-40 ${
            isOpen ? "translate-x-100 " : "-translate-x-[-100]"
          } sm:relative sm:translate-x-0 sm:w-60 sm:bg-white/10`}
        >
          <div className="p-6 flex flex-col items-center justify-center w-full">
            <IoPersonOutline className="text-5xl" />
            <h3 className="text-2xl border-b-2 px-6">Admin</h3>
            <ul className="w-full">
              <li className="p-4 pt-10 text-[1.2rem]">
                <Link to="/admin">Dashboard</Link>
              </li>
              <li className="p-4 border-t-white/20 border-t-2 text-[1.2rem]">
                <Link to="/useraccess">Users & Access</Link>
              </li>
              <li className="p-4 border-t-white/20 border-t-2 text-[1.2rem]">
                <Link to="/membersdata">Members Data</Link>
              </li>
              <li className="p-4 border-t-white/20 border-t-2 text-[1.2rem]">
                <Link to="/overview">Reports</Link>
              </li>
              <li className="p-4 border-t-white/20 border-t-2 text-[1.2rem]">
                <Link to="/churchinfo">System Settings</Link>
              </li>
              <li className="p-4 pb-5 text-[1.2rem] absolute bottom-0">
                <Link to="/register">Logout</Link>
              </li>
            </ul>

            {/* <button
              className="nav-btn close-btn sm:hidden"
              onClick={showNavbar}
            >
              <FaTimes />
            </button> */}
          </div>
        </nav>
      </div>

      {/* hamburger - visible only on small screens */}
      <button
        className="nav-btn right-0 sm:hidden fixed top-4 mr-4 z-50 p-2 bg-blue-400 backdrop-blur-[2px] rounded"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </>
  );
}

export default AdminNav;
