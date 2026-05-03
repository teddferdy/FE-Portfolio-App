"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PHOTO_TRANSITION = { delay: 2, duration: 0.4, ease: "easeInOut" };

const CIRCLE_TRANSITION = {
  duration: 20,
  repeat: Infinity,
  repeatType: "reverse",
};

const Photo = ({ src }) => {
  return (
    <div className="w-full h-full relative">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={PHOTO_TRANSITION}
        className="w-[298px] h-[298px] xl:w-[489px] xl:h-[489px] mix-blend-lighten absolute rounded-full overflow-hidden"
      >
        <Image
          src={src}
          alt="Profile photo"
          priority
          quality={100}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Animated circle */}
      <motion.svg
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={CIRCLE_TRANSITION}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
