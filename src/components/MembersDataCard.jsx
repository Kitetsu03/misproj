import { motion, useReducedMotion } from "framer-motion";

export function MembersDataCard({
  icon,
  title,
  value,
  subtext = "",
  variants,
}) {
  const shouldReduceMotion = useReducedMotion();
  const cardSpring = { type: "spring", stiffness: 300, damping: 26 };
  return (
    <motion.div
      className="card p-5 h-full rounded-2xl relative bg-white/5 text-green-950"
      variants={variants}
      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
      transition={cardSpring}
      tabIndex={0}
    >
      <div className="text-green-950 flex justify-between md:absolute md:w-full md:pr-10">
        <h2 className="font-semibold text-3xl">{title}</h2>
        <motion.span
          whileHover={{ rotate: 12, scale: 1.06 }}
          transition={{ duration: 0.15 }}
        >
          {icon}
        </motion.span>
      </div>
      <div className="text-green-950 flex flex-col justify-end md:absolute md:bottom-0 md:pb-4">
        <h3 className="text-3xl">{value}</h3>
        {subtext && <p className="text-sm">{subtext}</p>}
      </div>
    </motion.div>
  );
}
