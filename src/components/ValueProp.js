import React from "react";

export default function ValueProp() {
  return (
    <section
      id="value"
      className="bg-secondary text-text px-4 py-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      {/* Image or Visual */}
      <div className="md:w-1/2">
        <img
          src="assets/evgeniy-surzhan-VFMhqkiL6E4-unsplash.jpg"
          alt="Why FEELDX"
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Value Proposition Text */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Why FEELDX
        </h2>
        <p className="mb-4">
          At FEELDX, we combine industry-leading innovation with deep
          infrastructure and construction expertise. Our team transforms ideas
          into powerful visual stories, precise project control, and knowledge
          that empowers your teams to build smarter.
        </p>
        <p>
          Whether it’s delivering cutting-edge BIM solutions, immersive
          visualisations, or robust project strategies — we help clients drive
          clarity, collaboration, and excellence in every phase of construction.
        </p>
      </div>
    </section>
  );
}
