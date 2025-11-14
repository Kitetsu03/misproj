import AdminNav from "../../components/AdminNav";

function UserAccess() {
  return (
    <>
      <div className="min-h-dvh flex grid-cols-[auto_1fr]">
        <AdminNav />
        <header className="">
          <h1 className="text-3xl text-white">USER & ACCESS MANAGEMENT</h1>
          <p className="pt-3 text-white">
            Manage user accoutes, roles, and permissions for your church
            management system.
          </p>
          <div className="flex justify-end">
            <button className="bg-black hover:bg-blue-500 text-white font-bold py-[0.3rem] px-2 rounded-full">
              +Add User
            </button>
          </div>
          <div className="grid grid-cols-2 grid-rows-6 gap-4">
            <div className="col-span-2">
              1<h1>Search & Filter</h1>
              <form className="max-w-md mx-auto">
                <label
                  for="search"
                  className="block mb-2.5 text-sm font-medium text-heading sr-only "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none hover:shadow-1xl">
                    <svg
                      className="w-4 h-4 text-body"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 2 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    className="hover:2xl:"
                    type="search"
                    id="search"
                    class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                    placeholder="Search by name and email..."
                    required
                  />
                  <button className="bg-black hover:bg-blue-500 text-white font-bold py-[0.3rem] px-2 rounded-full">
                    All Rules
                  </button>
                </div>
              </form>
            </div>
            <div className="col-span-2 row-span-2 row-start-2">2</div>
            <div className="col-span-2 row-span-3 row-start-4">3</div>
          </div>
        </header>
      </div>
    </>
  );
}

export default UserAccess;
