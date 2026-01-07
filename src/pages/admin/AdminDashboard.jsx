import AdminNav from "../../components/AdminNav.jsx";
import { categoryDistribution, membersGrowth } from "../../data/chartData.js";
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
import { LineChart } from "../../components/LineChart.jsx";
import { DoughnutChart } from "../../components/DoughnutChart.jsx";

function AdminDashboard() {
  const infoCard = [
    {
      id: 1,
      title: "CATEGORY 1",
      icon: <SlPeople size={36} />,
      info: "Total Members",
      value: 150,
      desc: "+ 6 from last month",
    },
    {
      id: 2,
      title: "CATEGORY 2",
      icon: <ImStack size={36} />,
      info: "Worship Attending Members",
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
            {infoCard.map((info) => (
              <Card
                key={info.id}
                title={info.title}
                icon={info.icon}
                info={info.info}
                value={info.value}
                desc={info.desc}
              />
            ))}
            {/* LineChart */}
            <LineChart
              title="MEMBERSHIP GROWTH"
              data={membersGrowth}
              description="Total and active members over the last 6 months"
            />
            {/* doughnut chart */}
            <DoughnutChart
              title="MEMBERSHIP DISTRIBUTION BY NETWORK"
              data={categoryDistribution}
              description="Total members by age or network"
            />
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
