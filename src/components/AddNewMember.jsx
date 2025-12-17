import { CenteredTabs } from "./CenteredTabs";
import Dropdown from "./Dropdown";
import LifeGroup from "./LifeGroup";

function AddNewMember() {
  return (
    <>
      <div className="bg-white p-3 rounded-2xl  max-w-4xl mx-auto">
        {/* personal info */}
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Add New Member</h1>
          <p className="text-gray-500 text-sm">
            Create a comprehensive profile for a new church member.
          </p>
        </header>
        <CenteredTabs />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="space-y-2">
            <label className="font-medium">First Name</label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter First Name"
            />
          </div>
          <div className="space-y-2">
            <label className="font-medium">Last Name</label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter last name"
            />
          </div>

          <div className="space-y-1">
            <label className="font-medium">Birth Date</label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="mm/dd/yy"
            />
          </div>

          <div className="md:col-span-1 space-y-1">
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
    </>
  );
}

export default AddNewMember;
