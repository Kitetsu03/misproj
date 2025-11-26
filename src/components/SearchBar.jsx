import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <>
      <div className="flex-1 px-4 py-2 rounded-lg border border-black">
        <input
          className="w-full h-full border-none"
          type="text"
          placeholder="Search by name or email..."
        />
      </div>
    </>
  );
}
export default SearchBar;
