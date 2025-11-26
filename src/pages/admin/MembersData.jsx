import AdminNav from "../../components/AdminNav";
import { MembersDataCard } from "../../components/MembersDataCard";
import { motion } from "framer-motion";
import { SlPeople } from "react-icons/sl";
function MembersData() {
  const cards = [
    {
      id: 1,
      title: "TOTAL MEMBERS",
      icon: <SlPeople size={36} />,
      value: 150,
    },
    {
      id: 2,
      title: "VISITOR/S",
      icon: <SlPeople size={36} />,
      value: 1,
    },
    {
      id: 3,
      title: "ACTIVE MEMBERS",
      icon: <SlPeople size={36} />,
      value: 90,
    },
    {
      id: 4,
      title: "NEW MEMBERS",
      icon: <SlPeople size={36} />,
      value: 7,
    },
  ];
  return (
    <>
      <div className="min-h-dvh grid grid-cols-[auto_1fr]">
        <AdminNav />
        <div className="p-4 md:p-6 text-2xl md:text-5xl text-white  font-secondary">
          <header className="mb-6">
            <h1 className="text-2xl md:text-5xl font-extrabold">
              Members Data
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Overview & statistics
            </p>
          </header>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-secondary"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cards.map((card) => (
              <MembersDataCard
                key={card.id}
                title={card.title}
                icon={card.icon}
                value={card.value}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0 },
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default MembersData;
