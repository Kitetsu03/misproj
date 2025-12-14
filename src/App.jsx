import { Routes, Route } from "react-router-dom";
import RegForm from "./pages/auth/RegForm";
import LogForm from "./pages/auth/LogForm";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MemberPortal from "./pages/member/MembersPortal";
import GatekeeperDashboard from "./pages/gatekeeper/GatekeeperDashboard";
import UserAccess from "./pages/admin/UserAccess";
import MembersData from "./pages/admin/MembersData";
import Reports from "./pages/admin/Reports";
import UserAccessGate from "./pages/gatekeeper/UserAccessGate";
import MembersDataGate from "./pages/gatekeeper/MembersDataGate";
import Profile from "./pages/member/Profile";
import Giving from "./pages/member/Giving";
import Settings from "./pages/admin/Settings";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/register" element={<RegForm />}></Route>
        <Route path="/" element={<LogForm />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/useraccess" element={<UserAccess />}></Route>
        <Route path="/gatekeeper" element={<GatekeeperDashboard />}></Route>
        <Route path="/membersdata" element={<MembersData />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/member" element={<MemberPortal />}></Route>

        <Route path="/useraccessgate" element={<UserAccessGate />}></Route>
        <Route path="/membersdatagate" element={<MembersDataGate />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/giving" element={<Giving />}></Route>
      </Routes>
    </main>
  );
}

export default App;
