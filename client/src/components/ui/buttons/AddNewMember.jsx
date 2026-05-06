import { CenteredTabs } from "../tabs/CenteredTabs.jsx";

export function AddNewMember({ onSuccess, setSubmitting }) {
  return (
    <>
      <div className="bg-white w-full max-w-4xl mx-auto rounded-2xl p-4 sm:p-2 max-h-[90vh] overflow-y-auto overflow-x-hidden">
        {/* personal info */}
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Add New Member</h1>
          <p className="text-gray-500 text-sm">
            Create a comprehensive profile for a new church member.
          </p>
        </header>
        <CenteredTabs onSuccess={onSuccess} setSubmitting={setSubmitting} />
      </div>
    </>
  );
}
