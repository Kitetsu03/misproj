import { SlPeople } from "react-icons/sl";
import { ImStack } from "react-icons/im";
import { BsWindowSidebar } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function Card() {
  const cardSpring = { type: "spring", stiffness: 300, damping: 26 };
  const iconHover = { rotate: 12, scale: 1.05 };
  const cardAnim = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <>
      <motion.div
        className="card p-5 h-full rounded-2xl relative"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={cardSpring}
        initial={cardAnim.initial}
        animate={cardAnim.animate}
      >
        <div className="text-green-950 flex justify-between md:absolute md:w-full md:pr-10">
          <h2 className="font-semibold text-3xl">CATEGORY 1</h2>
          <motion.span whileHover={iconHover} transition={{ duration: 0.15 }}>
            <SlPeople size={36} />
          </motion.span>
        </div>
        <div className="text-green-950 flex flex-col justify-end md:absolute md:bottom-0 md:pb-4 ">
          <h3 className="text-3xl">150</h3>
          <p>+ 6 from last month</p>
        </div>
      </motion.div>
      <motion.div
        className="card p-5 h-full rounded-2xl relative"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={cardSpring}
        initial={cardAnim.initial}
        animate={cardAnim.animate}
      >
        <div className="text-green-950 flex justify-between md:absolute md:w-full md:pr-10">
          <h2 className="font-semibold text-3xl">CATEGORY 2</h2>
          <motion.span whileHover={iconHover} transition={{ duration: 0.15 }}>
            <ImStack size={36} />
          </motion.span>
        </div>
        <div className="text-green-950 flex flex-col justify-end md:absolute md:bottom-0 md:pb-4">
          <h3 className="text-3xl">90</h3>
          <p>+ 3 from last month</p>
        </div>
      </motion.div>
      <motion.div
        className="card p-5 h-full rounded-2xl relative"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={cardSpring}
        initial={cardAnim.initial}
        animate={cardAnim.animate}
      >
        <div className="text-green-950 flex justify-between md:absolute md:w-full md:pr-10">
          <h2 className="font-semibold text-3xl">TITHES & OFFERINGS</h2>
          <motion.span whileHover={iconHover} transition={{ duration: 0.15 }}>
            <BsWindowSidebar size={36} />
          </motion.span>
        </div>
        <div className="text-green-950 flex flex-col justify-end md:absolute md:bottom-0 md:pb-4">
          <h3 className="text-3xl">₱10k</h3>
          <p>+ 8.2% from last month</p>
        </div>
      </motion.div>
      <motion.div
        className="card p-5 h-full rounded-2xl relative"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={cardSpring}
        initial={cardAnim.initial}
        animate={cardAnim.animate}
      >
        <div className="text-green-950 flex justify-between">
          <h2 className="font-semibold text-3xl">ACTIVE LIFEGROUPS</h2>
          <motion.span whileHover={iconHover} transition={{ duration: 0.15 }}>
            <FaRegHeart size={36} />
          </motion.span>
        </div>
        <div className="text-green-950 flex flex-col justify-end">
          <h3 className="text-3xl">4</h3>
          <p>+ 1 new group this month</p>
        </div>
      </motion.div>
    </>
  );
}

export default Card;
