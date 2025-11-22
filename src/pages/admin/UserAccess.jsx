import AdminNav from "../../components/AdminNav";
import BlackButton from "../../components/BlackButton";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";

function UserAccess() {
  return (
    <div className="flex min-h-screen">
      <AdminNav />

      <main className="flex-1 p-6 space-y-6 font-secondary">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-sm">Welcome back!</p>
            <h1 className="text-5xl font-bold text-white">
              USER & ACCESS MANAGEMENT
            </h1>
            <p className="text-white/90 text-sm">
              Manage user accounts, roles, and permissions for your system.
            </p>
          </div>

          <button className="bg-black text-white px-5 py-2 rounded-lg shadow-md">
            + Add User
          </button>
        </div>

        {/* Search & Filter */}
        <div className="bg-[#d0ebf6] p-5 rounded-xl shadow-md space-y-3">
          <h2 className="font-semibold text-lg">Search & Filter</h2>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search by name or email..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300"
            />

            <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Leader</option>
              <option>Volunteer</option>
            </select>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-[#c7e7f4] p-5 rounded-xl shadow-md">
          <h2 className="font-semibold text-xl mb-1">Users (4)</h2>
          <p className="text-sm text-gray-700 mb-4">
            Manage user accounts and their access levels.
          </p>

          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-gray-300">
                <th className="pb-2">Name</th>
                <th className="pb-2">Email</th>
                <th className="pb-2">Role</th>
                <th className="pb-2">Last Login</th>
                <th className="pb-2">Actions</th>
              </tr>
            </thead>

            <tbody className="space-y-4">
              {[
                {
                  name: "John Smith",
                  email: "john.smith@church.org",
                  role: "Admin",
                  color: "bg-red-500",
                },
                {
                  name: "Sarah Johnson",
                  email: "sarah.johnson@church.org",
                  role: "Gatekeeper",
                  color: "bg-green-500",
                },
                {
                  name: "Mike Peters",
                  email: "mike.peters@church.org",
                  role: "Leader",
                  color: "bg-yellow-500",
                },
                {
                  name: "Lisa Chen",
                  email: "lisa.chen@church.org",
                  role: "Volunteer",
                  color: "bg-purple-500",
                },
              ].map((u) => (
                <tr key={u.email} className="border-b border-gray-200 text-sm">
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

                  <td>2025-01-15</td>

                  <td className="flex gap-2 py-3">
                    <button className="text-blue-600">✏️</button>
                    <button className="text-green-600">🔗</button>
                    <button className="text-red-600">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Role Definitions */}
        <div className="bg-[#c7e7f4] p-6 rounded-xl shadow-md">
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
                className="bg-[#d2eef9] p-5 rounded-xl border shadow-sm"
              >
                <h3 className="font-bold text-lg">{r.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{r.desc}</p>

                <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border shadow">
                  ⚙ Configure Permissions
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserAccess;
