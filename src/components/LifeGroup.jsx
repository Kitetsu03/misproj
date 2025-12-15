function LifeGroup() {
  return (
    <>
      {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
      {/* For TSX uncomment the commented types below */}
      <select className="px-4 py-2 rounded-lg border bg-[#A7E6FF] border-black">
        <option>All Roles</option>
        <option>Admin</option>
        <option>Gatekeeper</option>
        <option>Leader</option>
        <option>Member</option>
        <option>Volunteer</option>
      </select>
    </>
  );
}
export default LifeGroup;
