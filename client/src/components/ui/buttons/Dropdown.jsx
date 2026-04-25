function Dropdown() {
  return (
    <>
      <select className="px-4 py-2 rounded-lg border bg-[#A7E6FF] border-black">
        <option value="1">All Roles</option>
        <option value="2">Admin</option>
        <option value="3">Gatekeeper</option>
        <option value="4">Member</option>
      </select>
    </>
  );
}
export default Dropdown;
