"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const cardLength = content.length;

  const backgroundImages = [
    "/images/web.png",
    "/images/web.png",
    "/images/uiux.png",
    "/images/cicd.png",
  ];

  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);

  useEffect(() => {
    setBackgroundImage(backgroundImages[activeCard % backgroundImages.length]);
  }, [activeCard]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const sectionHeight = scrollHeight / cardLength;

      const index = Math.floor(scrollTop / sectionHeight);
      if (index !== activeCard && index >= 0 && index < cardLength) {
        setActiveCard(index);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeCard, cardLength]);

  return (
    <motion.div
      animate={{
        backgroundColor: "transparent",
      }}
      className="relative flex h-[20rem] justify-center overflow-y-auto text-[16px] scroll-smooth"
      ref={ref}
    >
      <div className="relative flex items-start">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 snap-start">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-4xl font-bold text-[var(--color-text)]"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-10 w-full text-[var(--color-text)]"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
          <div className="h-10" />
        </div>
      </div>

      {/* Sticky Background Image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={cn(
          "sticky top-10 hidden h-80 w-160 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};

export default StickyScroll;
