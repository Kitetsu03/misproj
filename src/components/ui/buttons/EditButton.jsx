import { HiOutlinePencilSquare } from "react-icons/hi2";

export function EditButton({ onClick, className = "", tooltip = "Edit" }) {
  return (
    <button
      onClick={onClick}
      className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 ${className}`}
      title={tooltip}
      aria-label={tooltip}
    >
      <HiOutlinePencilSquare size={24} />
    </button>
  );
}


