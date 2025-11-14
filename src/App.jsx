import { Routes, Route } from "react-router-dom";
import RegForm from "./pages/RegForm";
import LogForm from "./pages/LogForm";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MemberPortal from "./pages/member/MembersPortal";
import GatekeeperDashboard from "./pages/gatekeeper/GatekeeperDashboard";
import UserAccess from "./pages/admin/UserAccess";
import MembersData from "./pages/admin/MembersData";
import Overview from "./pages/admin/Reports/Overview";
import ChurchInfo from "./pages/admin/settings/ChurchInfo";

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
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/churchinfo" element={<ChurchInfo />}></Route>
        <Route path="/member" element={<MemberPortal />}></Route>
      </Routes>
    </main>
  );
}

export default App;
