import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2>Menu</h2>
        <ul>
          <li>Dashboard</li>
          <li>Members</li>
          <li>Attendance</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
