import { Chart as Chartjs } from "chart.js/auto";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { BsPersonCheck } from "react-icons/bs";
import { BiData } from "react-icons/bi";
import { FiPieChart } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";

function AdminNav({ isOpen, activeComponent, setActiveComponent }) {
  const navBarItems = [
    { id: 1, icon: <RxDashboard />, text: "Dashboard" },
    { id: 2, icon: <BsPersonCheck />, text: "Users & Access" },
    { id: 3, icon: <BiData />, text: "Members Data" },
    { id: 4, icon: <FiPieChart />, text: "Reports" },
    { id: 5, icon: <FiSettings />, text: "Settings" },
    { id: 1, icon: <CiLogout />, text: "Logout" },
  ];

  return (
    <>
      <div className="flex flex-col justify-between h-full m-2">
        <div>
          {navBarItems.map((item) => {
            const isActive = activeComponent === item.id;

            return (
              <div
                key={item.id}
                icon={item.icon}
                className={`flex items-center cursor-pointer transition-colors duration-200 my-2 ${
                  isOpen
                    ? "justify-start gap-3 p-3 rounded-xl"
                    : "justify-center w-12 h-12 rounded-xl"
                } ${
                  isActive
                    ? "bg-active2 text-accent rounded-xl"
                    : "hover:bg-secondary text-accent"
                }`}
                onClick={() => setActiveComponent(item.id)}
              >
                {isOpen && (
                  <h2 className="overflow-hidden text-sm">{item.text}</h2>
                )}
              </div>
            );
          })}
        </div>

        {/* Log Out */}
        <div
          className={`flex items-center text-red-400 hover:bg-secondary transition-colors duration-200 ${
            isOpen
              ? "justify-start gap-3 p-3 rounded-xl"
              : "justify-center w-12 h-12 rounded-xl"
          }`}
        >
          <CiLogout size={23} />
          {isOpen && <h2 className="overflow-hidden text-sm">Log Out</h2>}
        </div>
      </div>

      {/* <div className="">
        <nav
          ref={navRef}
          className={`bg-blue-400 backdrop-blur-[2px] text-white border-white/90 flex flex-col fixed sm:sticky right-0 top-0 h-dvh w-64 transition-transform duration-200 z-40 ${
            isOpen ? "translate-x-100 " : "-translate-x-[-100]"
          } sm:relative sm:translate-x-0 sm:w-60 sm:bg-white/10`}
        >
          <div className="p-6 flex flex-col items-center justify-center w-full font-secondary">
            <IoPersonOutline className="text-5xl" />
            <h3 className="text-2xl px-6 font-primary border-b-2 mb-5">
              Admin
            </h3>
            <ul className="w-full">
              <li className="p-4 text-[1.2rem] hover:bg-white/20">
                <Link to="/admin">Dashboard</Link>
              </li>
              <hr className="opacity-30" />
              <li className="p-4 text-[1.2rem] hover:bg-white/20 border-t-white/20">
                <Link to="/useraccess">Users & Access</Link>
              </li>
              <hr className="opacity-30" />
              <li className="p-4 text-[1.2rem] hover:bg-white/20">
                <Link to="/membersdata">Members Data</Link>
              </li>
              <li className="p-4 border-t-white/20 border-t-2 text-[1.2rem] hover:bg-white/20 ">
                <Link to="/reports">Reports</Link>
              </li>
              <li className="p-4 border-t-white/20 border-t-2 text-[1.2rem] hover:bg-white/20">
                <Link to="/settings">Settings</Link>
              </li>
              <li className="p-4 pb-5 text-[1.2rem] absolute bottom-0 hover:bg-white/20 w-full border-t-white/20 border-t-2">
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}

      {/* hamburger - visible only on small screens */}
      {/* <button
        className="nav-btn right-0 sm:hidden fixed top-4 mr-4 z-50 p-2 bg-blue-400 backdrop-blur-[2px] rounded"
        onClick={showNavbar}
      >
        <FaBars />
      </button> */}
    </>
  );
}

export default AdminNav;
