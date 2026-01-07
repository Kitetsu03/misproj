import { ReportTabs } from "../../components/ReportTabs.jsx";
import AdminNav from "../../components/AdminNav.jsx";

function Reports() {
  return (
    <>
      <div className="min-h-dvh grid grid-cols-[auto_1fr]">
        <AdminNav />
        <div className="body">
          <header className="p-5 font-secondary">
            <h1 className="text-2xl md:text-5xl text-white font-extrabold">
              REPORTING AND ANALYTICS
            </h1>
            <p className="pt-1 text-white">
              Generate custom reports and analyze church data to gain insights
              into membership, attendance, and engagement.
            </p>
          </header>
          <ReportTabs />
        </div>
      </div>
    </>
  );
}
export default Reports;
