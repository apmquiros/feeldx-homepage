import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-32 bg-secondary">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
        Building the Future of Infrastructure
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-text mb-8">
        FEELDX drives innovation in construction and infrastructure projects with industry expertise and cutting-edge solutions.
      </p>
      <a
        href="#services"
        className="inline-block bg-primary text-background px-8 py-4 rounded-md text-lg font-semibold hover:bg-accent transition"
      >
        Explore Our Services
      </a>
    </section>
  );
}
