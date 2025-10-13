"use client";

import { useLayoutEffect, useRef, useState } from "react";
import TimelineItem from "../components/Timeline/TimelineItem";
import { timelineData, TimelineItemType } from "../types/timelineData";
import { motion, AnimatePresence } from "framer-motion";

const Timeline = () => {
  const [activeItem, setActiveItem] = useState<TimelineItemType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const darkMode = true;

  useLayoutEffect(() => {
    const checkScroll = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        setIsScrollable(contentWidth > containerWidth);
      }
    };
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  if (timelineData.length === 0) return null;

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}} />
      <div className="relative w-full py-48 bg-[#0a0a0a] overflow-hidden">
        
        {/* 🔄 Scrollable Container */}
        <div
          ref={containerRef}
          className={`relative w-full ${
            isScrollable ? "overflow-x-auto" : "overflow-hidden"
          } scrollbar-none z-10`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* 📌 Timeline Items */}
          <div
            ref={contentRef}
            className="relative z-10 flex gap-24 px-48 py-48 w-fit min-w-full"
          >
            {/* 🧵 Horizontal Timeline Line */}
            <div className="absolute top-1/2 left-0 h-1 bg-white/40 transform -translate-y-1/2 z-0" style={{ width: '10000px' }} />

            {timelineData.map((item) => (
              <div key={item.id} className="relative">
                <TimelineItem
                  item={item}
                  darkMode={darkMode}
                  onClick={() => setActiveItem(item)}
                  position={item.position}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🌫️ Fade Gradients FIXED to edge of section */}
        {isScrollable && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-30 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-30 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          </>
        )}

        {/* 💬 Modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="rounded-xl p-6 max-w-md w-full bg-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-2">{activeItem.title}</h2>
                <p className="text-lg text-gray-300 mb-4">
                  {activeItem.Month} {activeItem.year}
                </p>
                <p className="mb-6">{activeItem.description}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  onClick={() => setActiveItem(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Timeline;
