import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

function QuickActions() {
  return (
    <>
      <h2 className="text-2xl">QUICK ACTIONS</h2>
      <p>Common tasks</p>
      <div className="">
        <button className="bg-white flex w-full">
          <IoPersonAddOutline />
          Add new member
        </button>
        <button className="bg-white flex w-full">
          <HiOutlinePencilAlt />
          Generate attendance report
        </button>
        <button className="bg-white flex w-full">
          <IoMdAdd />
          Generate financial report
        </button>
        <button className="bg-white flex w-full">
          <RiSendPlaneFill />
          Send announcement
        </button>
      </div>
    </>
  );
}

export default QuickActions;
