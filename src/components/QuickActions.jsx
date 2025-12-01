import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

function QuickActions({ icon, title }) {
  return (
    <>
      <div className="flex flex-col gap-3 h-1/6">
        <button className="bg-white flex w-full p-1">
          <span className="p-1">{icon}</span>
          {title}
        </button>
      </div>
    </>
  );
}

export default QuickActions;
