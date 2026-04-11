import { useState } from "react";
import { Input } from "../input/Input.jsx";
import { data } from "../../../data/users_data.js";

function CreateNewUser() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new user object
    const formData = {
      firstName,
      middleName,
      lastName,
      email,
      password,
      role,
    };

    //  Add to data array
    data.push(formData);
    console.log("New user added:", formData);

    // Reset form fields
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="bg-white p-3 rounded-2xl max-w-4xl mx-auto">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Create New User</h1>
        <p className="text-gray-500 text-sm">
          Add a new user to the church management system.
        </p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            id="firstName"
            type="text"
            label="First Name"
            name="firstName"
            value={firstName}
            placeholder="Enter first name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Input
            id="middleName"
            type="text"
            label="Middle Name"
            name="middleName"
            value={middleName}
            placeholder="Enter middle name"
            onChange={(e) => setMiddleName(e.target.value)}
          />

          <Input
            id="lastName"
            type="text"
            label="Last Name"
            name="lastName"
            value={lastName}
            placeholder="Enter last name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <Input
            id="email"
            type="email"
            label="Email"
            name="email"
            value={email}
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            id="password"
            type="password"
            label="Password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Role select */}
          <div className="md:col-span-2 space-y-1">
            <label className="font-medium">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a role</option>
              <option value="Admin">admin</option>
              <option value="Gatekeeper">gatekeeper</option>
              <option value="Member">member</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="submit"
            disabled={!firstName || !lastName || !email || !password || !role}
            className="px-5 py-2 rounded-lg font-secondary bg-black text-white hover:bg-gray-800 disabled:opacity-50"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewUser;
