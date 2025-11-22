import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

function QuickActions() {
  return (
    <>
      <h2 className="text-2xl">QUICK ACTIONS</h2>
      <p className="pb-5">Common tasks</p>
      <div className="grid gap-3 h-1/6">
        <button className="bg-white flex w-full p-1">
          <IoPersonAddOutline />
          Add new member
        </button>
        <button className="bg-white flex w-full p-1">
          <HiOutlinePencilAlt />
          Generate attendance report
        </button>
        <button className="bg-white flex w-full p-1">
          <IoMdAdd />
          Generate financial report
        </button>
        <button className="bg-white flex w-full p-1">
          <RiSendPlaneFill />
          Send announcement
        </button>
      </div>
    </>
  );
}

export default QuickActions;
