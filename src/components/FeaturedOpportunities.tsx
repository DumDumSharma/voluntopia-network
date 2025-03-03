
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import VolunteerCard, { VolunteerOpportunity } from "./VolunteerCard";
import { cn } from "@/lib/utils";

const FeaturedOpportunities = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const opportunities: VolunteerOpportunity[] = [
    {
      id: "1",
      title: "Community Garden Volunteer",
      organization: "Green Earth Initiative",
      location: "San Francisco, CA",
      commitment: "3-6 hours/week",
      requiredSkills: ["Gardening", "Outdoor Work", "Teamwork"],
      image: "https://images.unsplash.com/photo-1627626775846-122b778965ae?w=500&auto=format&fit=crop&q=80",
      matchPercentage: 96,
      featured: true
    },
    {
      id: "2",
      title: "Literacy Program Tutor",
      organization: "Education for All",
      location: "Remote",
      commitment: "2 hours/week",
      requiredSkills: ["Teaching", "Patience", "Communication"],
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=80",
      matchPercentage: 88
    },
    {
      id: "3",
      title: "Food Bank Assistant",
      organization: "Community Pantry",
      location: "Chicago, IL",
      commitment: "Flexible hours",
      requiredSkills: ["Organization", "Customer Service", "Physical Labor"],
      image: "https://images.unsplash.com/photo-1593113598332-cd59a93c6138?w=500&auto=format&fit=crop&q=80",
      matchPercentage: 75
    },
    {
      id: "4",
      title: "Wildlife Rehabilitation Assistant",
      organization: "Nature Rescue",
      location: "Portland, OR",
      commitment: "8-10 hours/week",
      requiredSkills: ["Animal Care", "Attention to Detail", "Reliability"],
      image: "https://images.unsplash.com/photo-1526951521990-620dc14c214b?w=500&auto=format&fit=crop&q=80",
      matchPercentage: 92
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-3xl font-display font-semibold text-foreground">Featured opportunities</h2>
            <p className="text-lg text-muted-foreground">
              Discover volunteer positions matching your skills and interests
            </p>
          </div>
          <Link
            to="/opportunities"
            className="mt-4 sm:mt-0 group inline-flex items-center text-primary font-medium transition-standard hover:underline"
          >
            View all opportunities
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opportunity, index) => (
            <VolunteerCard
              key={opportunity.id}
              opportunity={opportunity}
              className={cn(
                "transition-all duration-500 delay-[calc(100ms*var(--delay))]",
                !loaded && "opacity-0 translate-y-4",
                loaded && "opacity-100 translate-y-0"
              )}
              style={{ "--delay": index } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOpportunities;
