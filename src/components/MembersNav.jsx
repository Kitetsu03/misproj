import { Link } from "react-router-dom";

export function MembersNav({ icon, title, to = "/", className = "" }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center bg-complementary justify-center gap-1 w-full py-4 ${className}`}
    >
      <div className="text-xl">{icon}</div>
      <h2 className="text-xs">{title}</h2>
    </Link>
  );
}
export default MembersNav;
