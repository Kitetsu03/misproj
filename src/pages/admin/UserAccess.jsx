import AdminNav from "../../components/AdminNav";
import BlackButton from "../../components/BlackButton";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useState, useMemo } from "react";
import CreateNewUser from "../../components/CreateNewUser";
import ConfigureButton from "../../components/ConfigureButton";
import ConfigurePermission from "../../components/ConfigurePermission";

function UserAccess() {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");

  const users = useMemo(
    () => [
      {
        name: "John Smith",
        email: "john.smith@church.org",
        role: "Admin",
        lastLogin: "2025-01-15",
        color: "bg-red-500",
      },
      {
        name: "Sarah Johnson",
        email: "sarah.johnson@church.org",
        role: "Gatekeeper",
        lastLogin: "2025-01-15",
        color: "bg-green-500",
      },
      {
        name: "Mike Peters",
        email: "mike.peters@church.org",
        role: "Leader",
        lastLogin: "2025-01-15",
        color: "bg-yellow-500",
      },
      {
        name: "Lisa Chen",
        email: "lisa.chen@church.org",
        role: "Volunteer",
        lastLogin: "2025-01-15",
        color: "bg-purple-500",
      },
    ],
    []
  );

  const filteredUsers = useMemo(() => {
    if (!query) return users;
    const q = query.toLowerCase();
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
    );
  }, [users, query]);

  return (
    <div className="min-h-dvh grid grid-cols-[auto_1fr]">
      <AdminNav />

      <main className="flex-1 p-6 space-y-6 font-secondary">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-5xl font-bold text-white">
              USER & ACCESS MANAGEMENT
            </h1>
            <p className="text-white/90 text-sm">
              Manage user accounts, roles, and permissions for your system.
            </p>
          </div>
          <BlackButton
            val="+ Add User"
            exc="Create User"
            comp={<CreateNewUser />}
          />
        </div>

        {/* Search & Filter */}
        <div className="card p-5 rounded-xl shadow-md space-y-3">
          <h2 className="font-semibold text-lg">Search & Filter</h2>
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
        <div className="bg-[#A7E6FF] p-5 rounded-xl shadow-md">
          <h2 className="font-semibold text-xl mb-1">
            Users ({filteredUsers.length})
          </h2>
          <p className="text-sm mb-4">
            Manage user accounts and their access levels.
          </p>

          {/* Desktop table (hidden on small screens) */}
          <table className="hidden md:table w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-black/20">
                <th className="pb-2">Name</th>
                <th className="pb-2">Email</th>
                <th className="pb-2">Role</th>
                <th className="pb-2">Last Login</th>
                <th className="pb-2">Actions</th>
              </tr>
            </thead>

            <tbody className="space-y-4">
              {filteredUsers.map((u) => (
                <tr key={u.email} className="border-b border-black/20 text-sm">
                  <td className="py-2">{u.name}</td>
                  <td>{u.email}</td>

                  {/* Roles */}
                  <td>
                    <span
                      className={`${u.color} text-white text-xs px-3 py-1 rounded-full`}
                    >
                      {u.role}
                    </span>
                  </td>

                  <td>{u.lastLogin}</td>

                  <td className="flex gap-2 py-3">
                    <button
                      aria-label={`Edit ${u.name}`}
                      className="text-green-900"
                    >
                      <HiOutlinePencilSquare size={26} />
                    </button>
                    <button
                      aria-label={`Link ${u.name}`}
                      className="text-green-900"
                    >
                      <FiKey size={26} />
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
              <div key={u.email} className=" p-4 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-sm">{u.name}</div>
                    <div className="text-xs text-gray-600">{u.email}</div>
                  </div>

                  <div className="ml-3">
                    <span
                      className={`${u.color} text-white text-xs px-3 py-1 rounded-full`}
                    >
                      {u.role}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex justify-between items-center text-sm">
                  <div className="text-gray-600">
                    Last Login: <span className="text-black">2025-01-15</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      aria-label={`Edit ${u.name}`}
                      className="text-green-900"
                    >
                      <HiOutlinePencilSquare size={26} />
                    </button>
                    <button
                      aria-label={`Link ${u.name}`}
                      className="text-green-900"
                    >
                      <FiKey size={26} />
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

        {/* Role Definitions */}
        <div className="bg-[#A7E6FF] p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Role Definitions</h2>
          <p className="text-gray-700 text-sm mb-6">
            Configure role permissions to access levels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Admin",
                desc: "Full System Access",
              },
              {
                title: "Gatekeeper",
                desc: "Financial and Sensitive Data Access",
              },
              {
                title: "Leader",
                desc: "LifeGroup and Ministry Leadership",
              },
              {
                title: "Volunteer",
                desc: "Basic Volunteer Access",
              },
              {
                title: "Member",
                desc: "Limited member portal access",
              },
            ].map((r) => (
              <div
                key={r.title}
                className="bg-[#82CDEB] p-5 rounded-xl border shadow-sm"
              >
                <h3 className="font-bold text-lg">{r.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{r.desc}</p>

                <ConfigureButton
                  val="Configure Permmision"
                  exc="Configure"
                  comp={<ConfigurePermission />}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserAccess;
