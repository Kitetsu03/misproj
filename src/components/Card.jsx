import { SlPeople } from "react-icons/sl";
import { ImStack } from "react-icons/im";
import { BsWindowSidebar } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

function Card() {
  return (
    <>
      <div className="card p-5 h-full rounded-2xl relative">
        <div className="text-green-950 flex justify-between md:absolute md:w-full md:pr-10">
          <h2 className="font-semibold text-3xl">CATEGORY 1</h2>
          <SlPeople size={36} />
        </div>
        <div className="text-green-950 flex flex-col justify-end md:absolute md:bottom-0 md:pb-4 ">
          <h3 className="text-3xl">150</h3>
          <p>+ 6 from last month</p>
        </div>
      </div>
      <div className="card p-5 h-full rounded-2xl relative">
        <div className="text-green-950 flex justify-between md:absolute md:w-full md:pr-10">
          <h2 className="font-semibold text-3xl">CATEGORY 2</h2>
          <ImStack className="text-4xl" />
        </div>
        <div className="text-green-950 flex flex-col justify-end md:absolute md:bottom-0 md:pb-4">
          <h3 className="text-3xl">90</h3>
          <p>+ 3 from last month</p>
        </div>
      </div>
      <div className="card p-5 h-full rounded-2xl relative">
        <div className="text-green-950 flex justify-between md:absolute md:w-full md:pr-10">
          <h2 className="font-semibold text-3xl">TITHES & OFFERINGS</h2>
          <BsWindowSidebar className="text-4xl" />
        </div>
        <div className="text-green-950 flex flex-col justify-end md:absolute md:bottom-0 md:pb-4">
          <h3 className="text-3xl">₱10k</h3>
          <p>+ 8.2% from last month</p>
        </div>
      </div>
      <div className="card p-5 h-full rounded-2xl relative">
        <div className="text-green-950 flex justify-between">
          <h2 className="font-semibold text-3xl">ACTIVE LIFEGROUPS</h2>
          <FaRegHeart className="text-4xl" />
        </div>
        <div className="text-green-950 flex flex-col justify-end">
          <h3 className="text-3xl">4</h3>
          <p>+ 1 new group this month</p>
        </div>
      </div>
    </>
  );
}

export default Card;
