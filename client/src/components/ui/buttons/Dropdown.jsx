function Dropdown({ value, onChange }) {
  return (
    <>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 rounded-lg border bg-[#A7E6FF] border-black"
      >
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="gatekeeper">Gatekeeper</option>
        <option value="member">Member</option>
      </select>
    </>
  );
}
export default Dropdown;
