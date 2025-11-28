function Dropdown() {
  return (
    <>
      {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
      {/* For TSX uncomment the commented types below */}
      <select className="px-4 py-2 rounded-lg border border-black">
        <option className="bg-[#A7E6FF]">All Roles</option>
        <option className="bg-[#A7E6FF]">Admin</option>
        <option className="bg-[#A7E6FF]">Gatekeeper</option>
        <option className="bg-[#A7E6FF]">Leader</option>
        <option className="bg-[#A7E6FF]">Member</option>
        <option className="bg-[#A7E6FF]">Volunteer</option>
      </select>
    </>
  );
}
export default Dropdown;
