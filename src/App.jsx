import { Routes, Route } from "react-router-dom";
import RegForm from "./pages/auth/RegForm";
import LogForm from "./pages/auth/LogForm";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MemberPortal from "./pages/member/MembersPortal";
import GatekeeperDashboard from "./pages/gatekeeper/GatekeeperDashboard";
import UserAccess from "./pages/admin/UserAccess";
import MembersData from "./pages/admin/MembersData";
import Reports from "./pages/admin/Reports";
import MembersDataGate from "./pages/gatekeeper/MembersDataGate";
import Profile from "./pages/member/Profile";
import Giving from "./pages/member/Giving";
import Settings from "./pages/admin/Settings";
import ReportsGate from "./pages/gatekeeper/ReportsGate";
import { Attendance } from "./pages/gatekeeper/Attendance";
import { Finance } from "./pages/gatekeeper/Finance";

function App() {
  return (
    <main className="main-content">
      <Routes>
        {/* Public */}
        <Route path="/" element={<LogForm />} />
        <Route path="/register" element={<RegForm />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/useraccess" element={<UserAccess />} />
        <Route path="/admin/members" element={<MembersData />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/finance" element={<Finance />} />

        {/* Gatekeeper */}
        <Route path="/gatekeeper" element={<GatekeeperDashboard />} />
        <Route path="/gatekeeper/members" element={<MembersDataGate />} />
        <Route path="/gatekeeper/reports" element={<ReportsGate />} />
        <Route path="/gatekeeper/attendance" element={<Attendance />} />

        {/* Member */}
        <Route path="/member" element={<MemberPortal />} />
        <Route path="/member/profile" element={<Profile />} />
        <Route path="/member/giving" element={<Giving />} />

        {/* Fallback */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </main>
  );
}

export default App;
