import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-6 bg-background shadow">
      <a
        href="#"
        className="text-2xl md:text-3xl font-extrabold text-primary hover:text-accent transition"
      >
        FEELDX
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6">
        <a href="#services" className="hover:text-accent">Services</a>
        <a href="#value" className="hover:text-accent">Why FEELDX</a>
        <a href="#case" className="hover:text-accent">Case Studies</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
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
            <a href="#services" className="hover:text-accent" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#value" className="hover:text-accent" onClick={() => setIsOpen(false)}>Why FEELDX</a>
            <a href="#case" className="hover:text-accent" onClick={() => setIsOpen(false)}>Case Studies</a>
            <a href="#contact" className="hover:text-accent" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}
