"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Stairs from "./Stairs";

const OVERLAY_TRANSITION = { delay: 1, duration: 0.4, ease: "easeInOut" };

const StairTransition = () => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathName}>
        {/* Stair steps */}
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>

        {/* Overlay */}
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={OVERLAY_TRANSITION}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
