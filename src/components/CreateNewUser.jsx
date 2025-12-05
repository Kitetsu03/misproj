function CreateNewUser() {
  return (
    <div className="bg-white p-3 rounded-2xl  max-w-4xl mx-auto">
      {" "}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Create New User</h1>
        <p className="text-gray-500 text-sm">
          Add a new user to the church management system.
        </p>
      </header>
      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-1">
          <label className="font-medium">First Name</label>
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter first name"
          />
        </div>

        {/* Last Name */}
        <div className="space-y-1">
          <label className="font-medium">Last Name</label>
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter last name"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="font-medium">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter email address"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="font-medium">Password</label>
          <input
            type="password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Password"
          />
        </div>

        {/* Role */}
        <div className="md:col-span-2 space-y-1">
          <label className="font-medium">Role</label>
          <select className="w-full p-3 border rounded-lg text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Select a role</option>
            <option>Admin</option>
            <option>Gatekeeper</option>
            <option>Leader</option>
            <option>Member</option>
            <option>Volunteer</option>
          </select>
        </div>
      </div>
      {/* Permissions */}
      <div className="mt-6">
        <h2 className="font-semibold mb-2">Permissions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            "View Members",
            "Edit Members",
            "Delete Members",
            "View Financial Data",
            "Approve Transactions",
            "Manage LifeGroups",
            "Generate Reports",
            "System Settings",
          ].map((perm) => (
            <label key={perm} className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              {perm}
            </label>
          ))}
        </div>
      </div>
      {/* Buttons */}
    </div>
  );
}

export default CreateNewUser;
