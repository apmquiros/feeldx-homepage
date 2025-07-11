import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      category: "Visualisation",
      items: [
        "Content Strategy",
        "Storytelling",
        "3D Visualisation",
        "BIM 3D, 4D, 5D",
        "Multimedia Design",
      ],
    },
    {
      category: "Project Control",
      items: [
        "Construction Life Cycle Management",
        "Project Control & Project Management",
        "Tender Programmes",
        "Construction Programme",
        "Project Forensic Analysis (NOD/EOT Claims & Scheduling)",
      ],
    },
    {
      category: "Education",
      items: ["Education & Training"],
    },
  ];

  return (
    <section
      ref={ref}
      id="services"
      className="bg-background text-text px-4 py-20 max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
      >
        Our Core Services
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            className="bg-secondary p-8 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {service.category}
              </h3>
              <ul className="space-y-2 mb-6">
                {service.items.map((item, i) => (
                  <li key={i} className="text-text pl-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services", -80);
              }}
              className="inline-block bg-primary text-background px-4 py-2 rounded-md font-semibold hover:bg-accent active:bg-primary focus:outline-none transition text-center"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
