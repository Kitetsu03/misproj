import AdminNav from "../../components/AdminNav";
import Card from "../../components/Card.jsx";
import { ImStack } from "react-icons/im";
import { BsWindowSidebar } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import SearchBar from "../../components/SearchBar";
import Dropdown from "../../components/Dropdown";
import { SlPeople } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useState, useMemo } from "react";
import { BlackButton } from "../../components/BlackButton.jsx";
import { AddNewMember } from "../../components/AddNewMember.jsx";
function MembersData() {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");

  const users = useMemo(
    () => [
      {
        name: "John Smith",
        email: "john.smith@church.org",
        status: "Active",
        category: "LGAM",
        attendance: 95,
        lastVisit: "2025-01-10",
        color: "bg-green-500",
      },
      {
        name: "Sarah Johnson",
        email: "sarah.johnson@church.org",
        status: "Active",
        category: "LGAM",
        attendance: 85,
        lastVisit: "2025-01-10",
        color: "bg-green-500",
      },
      {
        name: "Mike Peters",
        email: "mike.peters@church.org",
        status: "Inactive",
        category: "WSAM",
        attendance: 0,
        lastVisit: "2025-01-10",
        color: "bg-yellow-500",
      },
      {
        name: "Lisa Chen",
        email: "lisa.chen@church.org",
        status: "Visitor",
        category: "Visitor",
        attendance: 10,
        lastVisit: "2025-01-10",
        color: "bg-purple-500",
      },
    ],
    []
  );

  const infos = [
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
      info: "Total Tithes & Offerings This Month",
      value: "₱10K",
      desc: "+ 8.2% from last month",
    },
    {
      id: 4,
      title: "ACTIVE LIFEGROUPS",
      icon: <FaRegHeart size={36} />,
      info: "Current Active Lifegroups",
      value: 4,
      desc: "+ 1 new group this month",
    },
  ];

  const filteredUsers = useMemo(() => {
    if (!query) return users;
    const q = query.toLowerCase();
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
    );
  }, [users, query]);

  return (
    <>
      <div className="min-h-dvh grid grid-cols-[auto_1fr]">
        <AdminNav />
        <div className="p-4 md:p-5 font-secondary">
          <header className="mb-6 text-2xl md:text-5xl text-white">
            <h1 className="text-2xl md:text-5xl font-extrabold">
              MEMBERS DATA
            </h1>
            <p className="text-sm text-muted-foreground">
              Overview & statistics
            </p>
          </header>
          <div className="flex flex-col gap-2 p-2 md:grid md:grid-cols-4 md:grid-rows-1 md:gap-3 md:p-3 font-secondary">
            {infos.map((info) => (
              <Card
                key={info.id}
                title={info.title}
                icon={info.icon}
                info={info.info}
                value={info.value}
                desc={info.desc}
              />
            ))}
            <div className="card p-5 rounded-xl shadow-md space-y-3 col-span-4">
              <div className="flex gap-2 ">
                <h2 className="font-semibold text-lg p-2">Search & Filter</h2>
                <div className="flex flex-1 gap-2 justify-end">
                  <BlackButton
                    val="Import"
                    exc="Import Members"
                    comp={<input type="file" id="file-input" text="Click here"/>}
                  />
                  <BlackButton val="Export" exc="Export Members" />
                  <BlackButton
                    val="+ Add Member"
                    exc="Add Member"
                    comp={<AddNewMember />}
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-col md:flex-row">
                <SearchBar
                  value={searchValue}
                  onChange={(v) => setSearchValue(v)}
                  onSearch={() => setQuery(searchValue)}
                />
                <Dropdown />
              </div>
            </div>
            {/* Users Table */}
            <div className="bg-[#A7E6FF] p-5 rounded-xl shadow-md w-full col-span-4">
              <h2 className="font-semibold text-xl mb-1">
                Members ({filteredUsers.length})
              </h2>
              <p className="text-sm mb-4">
                Complete member database with attendance and engagement
                tracking.
              </p>

              {/* Desktop table (hidden on small screens) */}
              <table className="hidden md:table w-full border-collapse">
                <thead>
                  <tr className="text-left border-b border-black/20">
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Contact</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2">Category</th>
                    <th className="pb-2">Attendance</th>
                    <th className="pb-2">Last Visit</th>
                    <th className="pb-2">Actions</th>
                  </tr>
                </thead>

                <tbody className="space-y-4">
                  {filteredUsers.map((u) => (
                    <tr
                      key={u.email}
                      className="border-b border-black/20 text-sm"
                    >
                      <td className="py-2">{u.name}</td>
                      <td>{u.email}</td>

                      {/* status */}
                      <td>
                        <span
                          className={`${u.color} text-white text-xs px-3 py-1 rounded-full`}
                        >
                          {u.status}
                        </span>
                      </td>

                      <td>{u.category}</td>
                      <td>{u.attendance}%</td>
                      <td>{u.lastVisit}</td>

                      <td className="flex gap-2 py-3">
                        <button
                          aria-label={`Edit ${u.name}`}
                          className="text-green-900"
                        >
                          <HiOutlinePencilSquare size={26} />
                        </button>

                        <button
                          aria-label={`Delete ${u.name}`}
                          className="text-green-900"
                        >
                          <FaRegTrashAlt size={23} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile stacked cards (visible on small screens) */}
              <div className="md:hidden space-y-3">
                {filteredUsers.map((u) => (
                  <div
                    key={u.email}
                    className=" p-4 rounded-lg shadow-sm border"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-sm">{u.name}</div>
                        <div className="text-xs text-gray-600">{u.email}</div>
                      </div>

                      <div className="ml-3">
                        <span
                          className={`${u.color} text-white text-xs px-3 py-1 rounded-full`}
                        >
                          {u.status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex justify-between items-center text-sm">
                      <div className="text-gray-600">
                        Last Login:{" "}
                        <span className="text-black">2025-01-15</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          aria-label={`Edit ${u.name}`}
                          className="text-green-900"
                        >
                          <HiOutlinePencilSquare size={26} />
                        </button>

                        <button
                          aria-label={`Delete ${u.name}`}
                          className="text-green-900"
                        >
                          <FaRegTrashAlt size={23} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MembersData;
