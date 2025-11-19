import AdminNav from "../../components/AdminNav";
import BlackButton from "../../components/BlackButton";
import Dropdown from "../../components/Dropdown";

function UserAccess() {
  return (
    <>
      <div className="flex">
        <AdminNav />
        <div className="">
          <BlackButton className="flex justify-end" />
          <Dropdown className="flex justify-end" />
        </div>
      </div>
    </>
  );
}
export default UserAccess;
