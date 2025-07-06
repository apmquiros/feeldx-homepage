import React, { useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-6 bg-background shadow">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection();
        }}
        className="text-2xl md:text-3xl font-extrabold text-primary hover:text-accent active:text-primary transition focus:outline-none"
      >
        FEELDX
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6">
        <a href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("services", -80);
          }}
          className="text-primary hover:text-accent active:text-primary transition focus:outline-none">Services</a>
        <a href="#value"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("value", -80);
          }}
          className="text-primary hover:text-accent active:text-primary transition focus:outline-none">Why FEELDX</a>
        <a href="#case"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("case", -80);
          }}
          className="text-primary hover:text-accent active:text-primary transition focus:outline-none">Case Studies</a>
        <a href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact", -80);
          }}
          className="text-primary hover:text-accent active:text-primary transition focus:outline-none">Contact</a>
      </nav>

      {/* Mobile nav*/}
      <div
        className="md:hidden relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-6 right-0 w-48 bg-background
           shadow-md flex flex-col items-start gap-4 p-6 transition-all">
            <a href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services", -80);
                setIsOpen(false);
              }}
              className="text-primary hover:text-accent active:text-primary transition focus:outline-none">Services</a>
            <a href="#value"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("value", -80);
                setIsOpen(false);
              }}
               className="text-primary hover:text-accent active:text-primary transition focus:outline-none">Why FEELDX</a>
            <a href="#case"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("case", -80);
                setIsOpen(false);
              }}
               className="text-primary hover:text-accent active:text-primary transition focus:outline-none">Case Studies</a>
            <a href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact", -80);
                setIsOpen(false);
              }}
               className="text-primary hover:text-accent active:text-primary transition focus:outline-none">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}
