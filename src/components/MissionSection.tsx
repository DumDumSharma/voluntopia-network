
import React, { useState, useEffect } from "react";
import { Shield, Users, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const MissionSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Personalized Matching",
      description: "Our intelligent system connects volunteers with opportunities that align with their skills, interests, and availability."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Verified Organizations",
      description: "All partner organizations are thoroughly vetted to ensure legitimate, impactful volunteer opportunities."
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Impact Tracking",
      description: "Track your volunteer hours, skills developed, and the tangible difference you're making in communities."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
            Our mission is to connect passion with purpose
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe everyone has something valuable to contribute. Our platform makes it simple to find meaningful volunteer opportunities that match your unique skills and interests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-card rounded-2xl p-6 border border-border shadow-soft transition-all duration-700 delay-[calc(150ms*var(--delay))]",
                !loaded && "opacity-0 translate-y-6",
                loaded && "opacity-100 translate-y-0 hover:shadow-md hover:-translate-y-1"
              )}
              style={{ "--delay": index } as React.CSSProperties}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Statistics */}
        <div 
          className={cn(
            "mt-16 p-8 md:p-10 glass rounded-2xl border border-primary/10 shadow-soft transition-all duration-700 delay-200",
            !loaded && "opacity-0 scale-95",
            loaded && "opacity-100 scale-100"
          )}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Active volunteers" },
              { value: "500+", label: "Partner organizations" },
              { value: "2,500+", label: "Opportunities available" },
              { value: "100,000+", label: "Volunteer hours logged" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-semibold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
