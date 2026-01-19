import Input from "./Input.jsx";

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
        <Input type="text" label="First Name" placeholder="Enter first name" />

        <Input type="text" label="Last Name" placeholder="Enter last name" />

        <Input type="email" label="Email" placeholder="Enter email address" />

        <Input type="password" label="Password" placeholder="Password" />

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
    </div>
  );
}

export default CreateNewUser;
