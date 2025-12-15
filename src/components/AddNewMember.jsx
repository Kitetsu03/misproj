import { CenteredTabs } from "./CenteredTabs";
import { Dropdown } from "./Dropdown";
import { LifeGroup } from "./LifeGroup";

function AddNewMember() {
  return (
    <>
      <div className="grid pt-1 pb-1 h-1/6">
        {/* personal info */}
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Add New Member</h1>
          <p className="text-gray-500 text-sm">
            Create a comprehensive profile for a new church member.
          </p>
        </header>
        <CenteredTabs />
        <div className="space-y-1">
          <label className="font-medium">First Name</label>
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter First Name"
          />
        </div>
        <div className="space-y-1">
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

        <div className="space-y-1">
          <label className="font-medium">Membership type</label>
          <Dropdown />
        </div>
      </div>

      {/* contact detail */}
      <div className="grid pt-1 pb-1 h-1/6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Add New Member</h1>
          <p className="text-gray-500 text-sm">
            Create a comprehensive profile for a new church member.
          </p>
        </header>
        <CenteredTabs />
        <div className="space-y-1">
          <label className="font-medium">Email</label>
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="space-y-1">
          <label className="font-medium">Phone</label>
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="space-y-1">
          <label className="font-medium">Address</label>
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter full address"
          />
        </div>

        {/* church info */}
        <div className="grid pt-1 pb-1 h-1/6">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">Add New Member</h1>
            <p className="text-gray-500 text-sm">
              Create a comprehensive profile for a new church member.
            </p>
          </header>
          <CenteredTabs />
          <div className="space-y-1">
            <label className="font-medium">Join Date</label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="mm/dd/yy"
            />
          </div>
          <div className="space-y-1">
            <label className="font-medium">life Group</label>
            <LifeGroup />
          </div>

          <div className="space-y-1">
            <label className="font-medium">Address</label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter full address"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewMember;
