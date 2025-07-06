import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      id="contact"
      className="bg-primary text-background px-4 py-12 border-t-4 border-accent"
    >
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Brand & contact */}
        <div>
          <h3 className="text-2xl font-bold mb-4">FEELDX</h3>
          <p className="mb-2">
            Building clarity through innovation & visualisation.
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@feeldx.com"
              className="underline hover:text-accent active:text-background focus:outline-none"
            >
              info@feeldx.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="underline hover:text-accent active:text-background focus:outline-none"
            >
              +1 (234) 567-890
            </a>
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services", -80);
                }} className="hover:text-accent active:text-background focus:outline-none active">
                Services
              </a>
            </li>
            <li>
              <a href="#value"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("value", -80);
                }} className="hover:text-accent active:text-background focus:outline-none">
                Why FEELDX
              </a>
            </li>
            <li>
              <a href="#case"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("case", -80);
                }} className="hover:text-accent active:text-background focus:outline-none">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("testimonials", -80);
                }} className="hover:text-accent active:text-background focus:outline-none">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact", -80);
                }} className="hover:text-accent active:text-background focus:outline-none">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p className="mb-2">© {new Date().getFullYear()} FEELDX</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
