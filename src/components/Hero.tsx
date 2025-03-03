
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-violet-50 -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] -z-10"></div>
      
      <div className="section-container grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        {/* Text content */}
        <div className={cn(
          "space-y-6 max-w-2xl transition-all duration-700 delay-100",
          loaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        )}>
          <div className="inline-flex items-center bg-white/50 backdrop-blur-sm border border-primary/10 px-3 py-1 rounded-full text-sm text-primary/80 font-medium">
            <Heart className="h-3.5 w-3.5 mr-1.5 text-primary" />
            <span>Connecting hearts & hands to causes that matter</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold !leading-tight text-foreground">
            Find your perfect <br />
            <span className="text-primary">volunteer match</span>
          </h1>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            Connect with organizations that align with your values and skills. Make a difference in your community through meaningful volunteer opportunities tailored just for you.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/opportunities"
              className="btn-hover-effect inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-sm hover:shadow-md"
            >
              Find opportunities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link
              to="/organizations"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-border text-foreground font-medium shadow-sm hover:shadow-md hover:bg-secondary transition-standard"
            >
              For organizations
            </Link>
          </div>
          
          <div className="pt-4 flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-violet-100"></div>
                </div>
              ))}
            </div>
            <div className="text-sm text-foreground/80">
              <span className="font-semibold text-primary">2,500+</span> volunteers already registered
            </div>
          </div>
        </div>
        
        {/* Image */}
        <div className={cn(
          "relative transition-all duration-700 delay-200 rounded-2xl shadow-2xl overflow-hidden h-[460px] lg:h-[540px]",
          loaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        )}>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
          <div className="absolute left-6 bottom-6 glass px-4 py-3 rounded-xl shadow-soft max-w-xs animate-slide-in-right">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <p className="text-sm font-medium">92% match with your skills and interests</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center image-loading">
            <img 
              src="https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?w=800&auto=format&fit=crop&q=80" 
              alt="Volunteers working together" 
              className={cn(
                "object-cover w-full h-full transition-all duration-1000",
                loaded ? "image-loaded" : "image-loading-blur"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
