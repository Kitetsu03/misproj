import { CenteredTabs } from "../../components/CenteredTabs.jsx";
import AdminNav from "../../components/AdminNav.jsx";

function Reports() {
  return (
    <>
      <div className="min-h-dvh grid grid-cols-[auto_1fr]">
        <AdminNav />
        <div className="body">
          <header className="p-5 font-secondary">
            <h1 className="text-2xl md:text-5xl text-white font-extrabold">
              CHURCH MANAGEMENT DASHBOARD
            </h1>
            <p className="pt-1 text-white">
              Welcome back! Here's an overview of your church's key metrics and
              recent activity.
            </p>
          </header>
          <CenteredTabs />
        </div>
      </div>
    </>
  );
}
export default Reports;
