function CreateNewUser() {
  return (
    <>
      <div className=" w-auto bg-gray-50 h-auto flex flex-col gap-2">
        <header>
          <h1>Create New User</h1>
          <p className=" text-sm">
            Add a new user to the church management system.
          </p>
        </header>
        <div className=" p-5 space-y-3">
          <h2 className="font-semibold text-lg">First Name</h2>
          <input
            className="search p-2 border-black border-2"
            placeholder="Enter First Name"
          />
        </div>
        <div className=" p-5 space-y-3 ">
          <h2 className="font-semibold text-lg">Last Name</h2>
          <input
            className="search p-2 border-black border-2"
            placeholder="Enter Last Name"
          />
        </div>
        <div className=" p-5 space-y-3">
          <h2 className="font-semibold text-lg">Email</h2>
          <input
            className="search p-2 border-black border-2"
            placeholder=" Enter email address"
          />
        </div>
        <div className=" p-5 space-y-3">
          <h2 className="font-semibold text-lg">Password</h2>
          <input
            className="search p-2 border-black border-2"
            placeholder="Password"
          />
        </div>
        <div className=" p-5 space-y-3">
          <h2 className="font-semibold text-lg">Role</h2>
          <input
            className="search p-2 border-black border-2"
            placeholder="Select a role"
          />
        </div>
      </div>
    </>
  );
}
export default CreateNewUser;
