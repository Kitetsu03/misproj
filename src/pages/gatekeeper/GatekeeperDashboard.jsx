import GatekeeperNav from "../../components/GatekeeperNav";
import { categoryDistribution, membersGrowth } from "../../data/chartData.js";
import Card from "../../components/Card.jsx";
import QuickActions from "../../components/QuickActions.jsx";
import RecentActivities from "../../components/RecentActivities.jsx";
import { infoCard, financeCard } from "../../data/cardsInfo.jsx";
import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { LineChart } from "../../components/LineChart.jsx";
import { DoughnutChart } from "../../components/DoughnutChart.jsx";
import { BarLineChart } from "../../components/BarLineChart.jsx";

function GatekeeperDashboard() {
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
        <GatekeeperNav />
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
            {financeCard.map((info) => (
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
            <BarLineChart
              title="TITHES AND OFFERINGS"
              data={tithesAndOfferings}
              description="Quarterly tithes and offerings trends per Quarter."
            />
            <BarLineChart
              title="EXPENSES"
              data={expenses}
              description="Church expenses breakdown per Quarter."
            />
            <div className="col-span-1 md:col-span-4 flex justify-center items-center">
              <BarLineChart
                title="OFFERINGS VS EXPENSES"
                data={offeringVsExpenses}
                description="Comparison of offerings and expenses."
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
export default GatekeeperDashboard;
