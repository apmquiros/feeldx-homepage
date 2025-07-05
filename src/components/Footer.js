import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-background px-4 py-12 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Brand & contact */}
        <div>
          <h3 className="text-2xl font-bold mb-4">FEELDX</h3>
          <p className="mb-2">Building clarity through innovation & visualisation.</p>
          <p>Email:{" "} <a href="mailto:info@feeldx.com" className="underline hover:text-accent">info@feeldx.com</a></p>
          <p>Phone:{" "} <a href="tel:+1234567890" className="underline hover:text-accent">+1 (234) 567-890</a></p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-accent">Services</a>
            </li>
            <li>
              <a href="#value" className="hover:text-accent">Why FEELDX</a>
            </li>
            <li>
              <a href="#case" className="hover:text-accent">Case Studies</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-accent">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent">Contact</a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p className="mb-2">© {new Date().getFullYear()} FEELDX</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
