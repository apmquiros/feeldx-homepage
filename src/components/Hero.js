import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center text-center px-4 py-32 bg-secondary overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-primary mb-6"
      >
        Building the Future of Infrastructure
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-2xl text-lg md:text-xl text-text mb-8"
      >
        FEELDX drives innovation in construction and infrastructure projects
        with industry expertise and cutting-edge solutions.
      </motion.p>

      <motion.a
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("services", -80);
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="inline-block bg-primary text-background px-8 py-4 rounded-md text-lg font-semibold hover:bg-accent active:bg-background transition focus:outline-none"
      >
        Explore Our Services
      </motion.a>
    </section>
  );
}
