import { SlPeople } from "react-icons/sl";
import { ImStack } from "react-icons/im";
import { BsWindowSidebar } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

function Card() {
  return (
    <>
      <div className="card p-5 h-fit rounded-2xl">
        <div className="text-green-950 flex justify-between">
          <h2 className="font-semibold text-3xl">CATEGORY 1</h2>
          <SlPeople className="text-4xl" />
        </div>
        <div className="text-green-950 flex flex-col justify-end pt-20">
          <h3 className="text-5xl">150</h3>
          <p>+ 6 from last month</p>
        </div>
      </div>
      <div className="card p-5 h-fit rounded-2xl">
        <div className="text-green-950 flex justify-between">
          <h2 className="font-semibold text-3xl">CATEGORY 2</h2>
          <ImStack className="text-4xl" />
        </div>
        <div className="text-green-950 flex flex-col justify-end pt-20">
          <h3 className="text-5xl">90</h3>
          <p>+ 3 from last month</p>
        </div>
      </div>
      <div className="card p-5 h-fit rounded-2xl">
        <div className="text-green-950 flex justify-between">
          <h2 className="font-semibold text-3xl">TITHES & OFFERINGS</h2>
          <BsWindowSidebar className="text-4xl" />
        </div>
        <div className="text-green-950 flex flex-col justify-end pt-20">
          <h3 className="text-5xl">₱ 10,000.00</h3>
          <p>+ 8.2% from last month</p>
        </div>
      </div>
      <div className="card p-5 h-fit rounded-2xl">
        <div className="text-green-950 flex justify-between">
          <h2 className="font-semibold text-3xl">ACTIVE LIFEGROUPS</h2>
          <FaRegHeart className="text-4xl" />
        </div>
        <div className="text-green-950 flex flex-col justify-end pt-20">
          <h3 className="text-5xl">4</h3>
          <p>+ 1 new group this month</p>
        </div>
      </div>
    </>
  );
}

export default Card;
