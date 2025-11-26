import { Chart } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import AdminNav from "../../components/AdminNav.jsx";
import Card from "../../components/Card.jsx";
import QuickActions from "../../components/QuickActions.jsx";
import RecentActivities from "../../components/RecentActivities.jsx";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [resize, setResize] = useState(0);

  useEffect(() => {
    const handleResize = () => setResize((r) => r + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="min-h-dvh grid grid-cols-[auto_1fr]">
        <AdminNav />
        <div className="body">
          <header className="p-5 font-secondary">
            <h1 className="text-2xl md:text-5xl text-white font-extrabold">
              CHURCH MANAGEMENT DASHBOARD
            </h1>
            <p className="pt-3 text-white">
              Welcome back! Here's an overview of your church's key metrics and
              recent activity.
            </p>
          </header>
          <div className="flex flex-col gap-2 p-2 md:grid md:grid-cols-4 md:grid-rows-1 md:gap-4 md:p-5 font-secondary">
            <Card />

            {/* chart1 */}
            <div className="card p-5 col-span-2 row-span-1 rounded-2xl h-72 sm:h-80 md:h-96 flex justify-center items-center w-full">
              <Line
                key={resize}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                data={{
                  labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sept",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
                      fill: false,
                      borderColor: "rgb(75, 192, 192)",
                      tension: 0.1,
                      hoverOffset: 4,
                    },
                  ],
                }}
              />
            </div>
            <div className="card p-5 col-span-2 row-span-1 rounded-2xl flex justify-center items-center h-72 sm:h-80 md:h-96">
              <Doughnut
                key={resize}
                className="w-full h-full max-w-[520px] max-h-[520px]"
                style={{ maxWidth: "520px", maxHeight: "520px" }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                data={{
                  labels: ["Red", "Blue", "Yellow"],
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: [300, 50, 100],
                      backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                      ],
                      hoverOffset: 4,
                    },
                  ],
                }}
              />
            </div>
            <div className="card p-5 row-span-2 col-start-1 row-start-4 rounded-2xl font-secondary">
              <QuickActions />
            </div>
            <div className="card p-5 col-span-3 row-span-2 col-start-2 row-start-4 rounded-2xl">
              <RecentActivities />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminDashboard;
