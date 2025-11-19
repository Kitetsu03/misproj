import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <>
      <div className="">
        <input type="text w-20" />
        <span className="inline-block">
          <CiSearch className="hover:bg-white" />
        </span>
      </div>
    </>
  );
}
export default SearchBar;
