"use client";

import { motion } from "framer-motion";
import { TimelineItemType } from "@/types/timelineData";

type TimelineItemProps = {
  item: TimelineItemType;
  darkMode: boolean;
  onClick: () => void;
  position: "top" | "bottom";
};

const TimelineItem = ({ item, darkMode, onClick, position }: TimelineItemProps) => {
  const { Month, year, title } = item;
  const isTop = position === "top";

  // Frosted glass style
  const frostedStyle = `
    bg-white/10 backdrop-blur-xl 
    border border-white/20 
    shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)]
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: isTop ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center w-40"
    >
      {/* Card Above Line */}
      {isTop && (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClick}
          className={`absolute -top-32 left-1/2 transform -translate-x-1/2 p-4 rounded-xl w-80 max-w-xs text-center cursor-pointer ${frostedStyle} ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-blue-400 font-medium">
            {Month} {year}
          </p>
        </motion.div>
      )}

      {/* Dot */}
      <div className="w-4 h-4 bg-white border-2 border-blue-500 rounded-full z-10" />

      {/* Card Below Line */}
      {!isTop && (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClick}
          className={`absolute -bottom-32 left-1/2 transform -translate-x-1/2 p-4 rounded-xl w-80 max-w-xs text-center cursor-pointer ${frostedStyle} ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-blue-400 font-medium">
            {Month} {year}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TimelineItem;
