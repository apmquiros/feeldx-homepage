import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Project Manager, BuildCo",
      quote:
        "FEELDX transformed how we communicate complex construction plans. Their visualisations saved us countless hours and improved stakeholder buy-in.",
      image: "assets/BuildCologo.jpg",
    },
    {
      name: "Maria Lee",
      role: "Director of Operations, InfraDev",
      quote:
        "The project control and BIM services from FEELDX gave us full confidence in our scheduling and delivery. Outstanding support and innovation.",
      image: "assets/InfraDevlogo.jpg",
    },
    {
      name: "Samuel Carter",
      role: "Head of Design, UrbanEdge",
      quote:
        "Their team’s storytelling and multimedia design elevated our presentations. Our clients see the project before it’s built — that’s real value.",
      image: "assets/UrbanEdgelogo.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef(null);

  const slideDuration = 5000; // 5 seconds

  const clear = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const start = () => {
    clear();
    timeoutRef.current = setTimeout(() => {
      nextTestimonial();
    }, slideDuration);
  };

  useEffect(() => {
    if (!isPaused) {
      start();
    }
    return clear;
  }, [currentIndex, isPaused]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50) {
      nextTestimonial();
    } else if (info.offset.x > 50) {
      prevTestimonial();
    }
  };

  const prevTestimonial = () => {
    clear();
    setDirection(-1);
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const nextTestimonial = () => {
    clear();
    setDirection(1);
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="bg-secondary text-text px-4 pt-20 pb-32 max-w-3xl mx-auto text-center"
      aria-label="Testimonials Carousel"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
        What Our Clients Say
      </h2>

      <div
        className="relative bg-white p-8 rounded-lg shadow-lg flex flex-col items-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            role="tabpanel"
            initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="flex flex-col items-center cursor-grab active:cursor-grabbing"
          >
            <blockquote className="text-lg italic mb-6 max-w-xl">
              “{current.quote}”
            </blockquote>
            <img
              src={current.image}
              alt={`Logo of ${current.role.split(", ")[1]}`}
              className="w-16 h-16 object-contain mb-4"
            />
            <figcaption className="text-primary font-semibold">
              {current.name}
            </figcaption>
            <p className="text-sm">{current.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="relative w-full h-1 bg-gray-200 mt-6 rounded-full overflow-hidden">
          {!isPaused && (
            <motion.div
              key={currentIndex}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: slideDuration / 1000, ease: "linear" }}
              className="h-full bg-primary"
            ></motion.div>
          )}
        </div>

        {/* Dots */}
        <div
          className="flex gap-3 mt-4"
          role="tablist"
          aria-label="Testimonials navigation"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                clear();
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Show testimonial ${index + 1}`}
              aria-selected={index === currentIndex}
              className={`w-4 h-4 rounded-full transition focus:outline-none ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-gray-300 hover:bg-primary"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
