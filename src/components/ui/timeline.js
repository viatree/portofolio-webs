"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[var(--secondary)] dark:bg-[var(--backg)] font-sans md:px-10"
      ref={containerRef}
    >
      {/* Profile & Welcome Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-8 lg:px-10">
     <div className="flex flex-col items-center mb-10 md:mb-0 relative">
  {/* Background Shape */}
  <div className="absolute bg-green-300/70 w-44 h-44 rounded-full -top-2 left-1/2 -translate-x-1/2 -z-10" />

  {/* Profile Image */}
  <img
    src="images/photoCV.png"
    alt="Profile"
    className="w-55 h-55"
  />

  {/* CV Button */}
  <a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-13 py-2 border border-[var(--color-backg2)] text-white hover:bg-[var(--color-hover)] font-semibold rounded-full shadow text-sm"
  >
    Curriculum Vitae (CV)
  </a>
</div>


        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white">
            Welcome To my Journey
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mt-2">
          Dimulai dengan karya saya sebelumnya di bidang IT. Here&apos;s a timeline of my journey.
          </p>
        </div>
      </div>

      {/* Timeline Items */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[var(--color-backg2)] via-[var(--color-hover)] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
