import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cases = [
    {
      title: "Urban Infrastructure Upgrade",
      image: "assets/pexels-pixabay-462341.jpg",
      description: "Modernizing city transport hubs with BIM-driven visuals.",
    },
    {
      title: "Residential Complex Visualisation",
      image: "assets/chuttersnap-9F1hNmpzuN0-unsplash.jpg",
      description: "3D storytelling for large-scale housing projects.",
    },
    {
      title: "Construction Lifecycle Management",
      image: "assets/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg",
      description: "Integrated project control for major builds.",
    },
  ];

  return (
    <section
      ref={ref}
      id="case"
      className="bg-background text-text px-4 py-20 max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
      >
        Case Studies
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            className="bg-secondary rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-text mb-4">{item.description}</p>
              <a
                href="#case"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("case", -80);
                }}
                className="inline-block bg-primary text-background px-4 py-2 rounded-md font-semibold hover:bg-accent active:bg-primary focus:outline-none transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
