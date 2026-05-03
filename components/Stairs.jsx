import { motion } from "framer-motion";

const TOTAL_STEPS = 6;

const STAIR_TRANSITION = { duration: 0.4, ease: "easeInOut" };

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index) => TOTAL_STEPS - index - 1;

const Stairs = () => {
  return (
    <>
      {[...Array(TOTAL_STEPS)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            ...STAIR_TRANSITION,
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
