import { Input } from "../input/Input.jsx";
import { data } from "../../../data/users_data.js";

function CreateNewUser() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { firstName, email, password, middleName, lastName };
    data.push(formData);
    console.log("New user added:", formData);
    // Reset form fields or show success message as needed
  };
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
        <form onSubmit={handleSubmit} method="POST">
          <Input
            id="first-name"
            type="text"
            label="FirstName"
            className="form-control"
            name="first_name"
            value={firstName}
            placeholder="Enter first name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Input
            id="middle-name"
            type="text"
            label="MiddleName"
            className="form-control"
            name="middle_name"
            value={middleName}
            placeholder="Enter middle name"
            onChange={(e) => setMiddleName(e.target.value)}
          />

          <Input
            id="last-name"
            type="text"
            label="LastName"
            className="form-control"
            name="last_name"
            value={lastName}
            placeholder="Enter last name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <Input
            id="email"
            type="email"
            label="Email"
            className="form-control"
            name="email"
            value={email}
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            id="password"
            type="password"
            label="Password"
            className="form-control"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        {/* Role */}
        <div className="md:col-span-2 space-y-1">
          <label className="font-medium">Role</label>
          <select className="w-full p-3 border rounded-lg text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Select a role</option>
            <option>Admin</option>
            <option>Gatekeeper</option>
            <option>Member</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default CreateNewUser;
