"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <Row products={firstRow} translate={translateX} reverse />
        <Row products={secondRow} translate={translateXReverse} />
        <Row products={thirdRow} translate={translateX} reverse />
      </motion.div>
    </div>
  );
};

const Row = ({ products, translate, reverse = false }) => (
  <motion.div
    className={`flex flex-nowrap sm:flex-nowrap ${
      reverse ? "sm:flex-row-reverse":"sm:flex-row"
     } gap-4 sm:gap-8 md:gap-12 lg:gap-20
    mb-8 sm:mb-12 md:mb-20 lg:mb-20
    overflow-x-auto sm:overflow-visible px-4`}
  >
    {products.map((product) => (
      <ProductCard key={product.title} product={product} translate={translate} />
    ))}
  </motion.div>
);

const Header = () => (
<div className="w-full px-8 py-10 sm:py-20 md:py-32 lg:py-40 max-w-screen-xl mx-auto lg:text-left text-center sm:text-left">
  <h1 className="text-[28px] sm:text-2xl md:text-6xl lg:text-7xl font-bold dark:text-[var(--color-text)] leading-tight">
    Building the Future
    <br />
    with Passion and Collaboration
  </h1>
  <p className="mt-6 text-base px-30 lg:px-0 lg:text-justify text-md sm:text-lg md:text-xl lg:text-2xl dark:text-[var(--color-text)] max-w-2xl mx-auto sm:mx-0 ">
    I&apos;m a passionate developer who thrives in collaborative environments,
    working closely with designers and backend developers to bring ideas to life.
    I stay updated with the latest trends in tech and constantly seek opportunities
    to grow, learn, and innovate. For me, every new challenge is a chance
    to push boundaries and create something meaningful.
  </p>
</div>

);


const ProductCard = ({ product, translate }) => (
  <motion.div
    style={{ x: translate }}
    whileHover={{ y: -20 }}
    className="group/product relative shrink-0 w-[90vw] sm:w-[20rem] md:w-[24rem] lg:w-[30rem] sm:h-[64] h-120 sm:h-80 md:h-96"
  >
    <a
      href={product.link}
      className="block w-full h-full group-hover/product:shadow-2xl relative"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </a>
    <div className="absolute inset-0 bg-black opacity-0 group-hover/product:opacity-80 transition-opacity duration-300 pointer-events-none"></div>
    <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
      {product.title}
    </h2>
  </motion.div>
);
