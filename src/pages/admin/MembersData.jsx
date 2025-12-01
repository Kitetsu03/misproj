import AdminNav from "../../components/AdminNav";
import Card from "../../components/Card.jsx";
import { ImStack } from "react-icons/im";
import { BsWindowSidebar } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import SearchBar from "../../components/SearchBar";
import Dropdown from "../../components/Dropdown";
import { motion } from "framer-motion";
import { SlPeople } from "react-icons/sl";
function MembersData() {
  const infos = [
    {
      id: 1,
      title: "Category 1",
      icon: <SlPeople size={36} />,
      value: 150,
      desc: "+ 6 from last month",
    },
    {
      id: 2,
      title: "Category 2",
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
  return (
    <>
      <div className="min-h-dvh grid grid-cols-[auto_1fr]">
        <AdminNav />
        <div className="p-4 md:p-6 font-secondary">
          <header className="mb-6 text-2xl md:text-5xl text-white">
            <h1 className="text-2xl md:text-5xl font-extrabold">
              Members Data
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Overview & statistics
            </p>
          </header>

          <div className="flex flex-col gap-2 p-2 md:grid md:grid-cols-4 md:grid-rows-1 md:gap-3 md:p-5 font-secondary">
            {infos.map((info) => (
              <Card
                key={info.id}
                title={info.title}
                icon={info.icon}
                value={info.value}
                desc={info.desc}
              />
            ))}
            <div className="card p-5 rounded-xl shadow-md space-y-3 col-span-4">
              <h2 className="font-semibold text-lg">Search & Filter</h2>
              <div className="flex gap-2">
                <SearchBar />
                <Dropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MembersData;
