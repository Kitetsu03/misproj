import { CenteredTabs } from "./CenteredTabs";

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
      </div>
    </>
  );
}

export default AddNewMember;
