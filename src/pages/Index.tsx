
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedOpportunities from "@/components/FeaturedOpportunities";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedOpportunities />
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
