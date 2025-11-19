import AdminNav from "../../components/AdminNav";
import BlackButton from "../../components/BlackButton";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";

function UserAccess() {
  return (
    <>
      <div className="flex">
        <AdminNav />
        <div className="">
          <BlackButton className="flex justify-end" />
          <Dropdown className="flex justify-end" />
          <SearchBar></SearchBar>
        </div>
      </div>
    </>
  );
}
export default UserAccess;
