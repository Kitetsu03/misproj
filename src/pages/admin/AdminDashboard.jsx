import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import AdminNav from "../../components/AdminNav.jsx";
import Card from "../../components/Card.jsx";
import QuickActions from "../../components/QuickActions.jsx";
import RecentActivities from "../../components/RecentActivities.jsx";
import { SlPeople } from "react-icons/sl";
import { ImStack } from "react-icons/im";
import { BsWindowSidebar } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [resize, setResize] = useState(0);

  useEffect(() => {
    const handleResize = () => setResize((r) => r + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const infos = [
    {
      id: 1,
      title: "CATEGORY 1",
      icon: <SlPeople size={36} />,
      value: 150,
      desc: "+ 6 from last month",
    },
    {
      id: 2,
      title: "CATEGORY 2",
      icon: <ImStack size={36} />,
      value: 90,
      desc: "+ 3 from last month",
    },
    {
      id: 3,
      title: "TITHES & OFFERINGS",
      icon: <BsWindowSidebar size={36} />,
      value: "₱10K",
      desc: "+ 8.2% from last month",
    },
    {
      id: 4,
      title: "ACTIVE LIFEGROUPS",
      icon: <FaRegHeart size={36} />,
      value: 4,
      desc: "+ 1 new group this month",
    },
  ];
  const quickActionButtons = [
    {
      id: 1,
      icon: <IoPersonAddOutline />,
      title: "Add new member",
    },
    {
      id: 2,
      icon: <HiOutlinePencilAlt />,
      title: "Generate attendance report",
    },
    {
      id: 3,
      icon: <IoMdAdd />,
      title: "Generate financial report",
    },
    {
      id: 4,
      icon: <RiSendPlaneFill />,
      title: "Send announcement",
    },
  ];
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
          <div className="flex flex-col gap-2 p-2 md:grid md:grid-cols-4 md:grid-rows-1 md:gap-3 md:p-3 font-secondary">
            {infos.map((info) => (
              <Card
                key={info.id}
                title={info.title}
                icon={info.icon}
                value={info.value}
                desc={info.desc}
              />
            ))}
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
                      label: "Member Growth",
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
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                data={{
                  labels: ["MEN", "WOMEN", "YAN", "KKB", "CHILDREN"],
                  datasets: [
                    {
                      label: "Category Distribution",
                      data: [40, 40, 25, 15, 30],
                      backgroundColor: [
                        "#5AA3FF",
                        "#000798",
                        "#003F2E",
                        "#16745A",
                        "#00B0F0",
                      ],
                      hoverOffset: 4,
                      hoverBackgroundColor: ["#3D82FF", "#000680"],
                    },
                  ],
                }}
              />
            </div>
            <div className="card p-5 row-span-2 col-start-1 row-start-4 rounded-2xl font-secondary">
              <h2 className="text-2xl font-semibold">QUICK ACTIONS</h2>
              <p className="pb-3">Common tasks</p>
              {quickActionButtons.map((buttons) => (
                <QuickActions
                  key={buttons.id}
                  icon={buttons.icon}
                  title={buttons.title}
                />
              ))}
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
