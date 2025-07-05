import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ValueProp from "./components/ValueProp";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background text-text min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <Services />
      <ValueProp />
      <CaseStudies />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
