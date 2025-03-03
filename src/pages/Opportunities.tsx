
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowDownUp, ChevronDown, MapPin, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VolunteerCard, { VolunteerOpportunity } from "@/components/VolunteerCard";
import { cn } from "@/lib/utils";

const Opportunities = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  // Sample data
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
    },
    {
      id: "5",
      title: "Homeless Shelter Assistant",
      organization: "City Relief",
      location: "New York, NY",
      commitment: "4 hours/week",
      requiredSkills: ["Empathy", "Communication", "Reliability"],
      image: "https://images.unsplash.com/photo-1584634731339-252e58f8c1e2?w=500&auto=format&fit=crop&q=80",
      matchPercentage: 85
    },
    {
      id: "6",
      title: "Senior Companion",
      organization: "Elder Care Alliance",
      location: "Boston, MA",
      commitment: "2-4 hours/week",
      requiredSkills: ["Patience", "Empathy", "Communication"],
      image: "https://images.unsplash.com/photo-1516307053924-a394cb3b248f?w=500&auto=format&fit=crop&q=80",
      matchPercentage: 94
    },
    {
      id: "7",
      title: "Beach Cleanup Coordinator",
      organization: "Ocean Conservation Network",
      location: "Miami, FL",
      commitment: "Once a month",
      requiredSkills: ["Leadership", "Organization", "Environmental Knowledge"],
      image: "https://images.unsplash.com/photo-1621473289481-1001ae1e39b7?w=500&auto=format&fit=crop&q=80",
      matchPercentage: 79
    },
    {
      id: "8",
      title: "Technology Teacher",
      organization: "Digital Literacy Foundation",
      location: "Remote",
      commitment: "3 hours/week",
      requiredSkills: ["Teaching", "Technical Knowledge", "Patience"],
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=500&auto=format&fit=crop&q=80",
      matchPercentage: 91
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Define filter categories
  const filterCategories = [
    {
      name: "Causes",
      options: ["Environment", "Education", "Health", "Animals", "Arts & Culture", "Social Justice", "Disaster Relief"]
    },
    {
      name: "Skills",
      options: ["Teaching", "Communication", "Manual Labor", "Technical", "Leadership", "Creativity", "Medical"]
    },
    {
      name: "Commitment",
      options: ["One-time", "Weekly", "Monthly", "Flexible", "Remote", "Long-term"]
    },
    {
      name: "Location",
      options: ["Remote", "San Francisco", "New York", "Chicago", "Boston", "Portland", "Miami"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero banner */}
        <section className="bg-primary/5 border-b border-border py-12">
          <div className="section-container">
            <div className={cn(
              "max-w-2xl transition-all duration-500",
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">Find volunteer opportunities</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Browse opportunities that match your skills, interests, and availability.
              </p>
              
              {/* Search bar */}
              <div className="flex w-full max-w-xl rounded-xl overflow-hidden border border-border shadow-sm bg-background">
                <div className="flex-grow flex items-center px-4">
                  <Search className="h-5 w-5 text-muted-foreground mr-2" />
                  <input
                    type="text"
                    placeholder="Search opportunities..."
                    className="w-full py-3 outline-none bg-transparent"
                  />
                </div>
                <button className="btn-hover-effect px-6 py-3 bg-primary text-white font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Filters and results */}
        <section className="py-12">
          <div className="section-container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters sidebar */}
              <div className={cn(
                "lg:w-1/4 transition-all duration-500",
                loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}>
                {/* Mobile filter button */}
                <button
                  className="flex lg:hidden w-full items-center justify-between p-4 mb-4 rounded-lg border border-border bg-card"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <span className="font-medium">Filters</span>
                  </div>
                  <ChevronDown className={cn(
                    "h-5 w-5 transition-transform",
                    isFilterOpen && "transform rotate-180"
                  )} />
                </button>
                
                {/* Filter content */}
                <div className={cn(
                  "space-y-6",
                  !isFilterOpen && "hidden lg:block"
                )}>
                  <div className="rounded-xl border border-border p-5 bg-card shadow-soft space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Filters</h3>
                      <button className="text-sm text-primary hover:underline">
                        Clear all
                      </button>
                    </div>
                    
                    {filterCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <h4 className="text-sm font-semibold">{category.name}</h4>
                        <div className="space-y-2">
                          {category.options.map((option, optIndex) => (
                            <label key={optIndex} className="flex items-center space-x-2 cursor-pointer group">
                              <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-standard">
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Results */}
              <div className="lg:w-3/4">
                {/* Results header */}
                <div className={cn(
                  "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 transition-all duration-500 delay-100",
                  loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}>
                  <div>
                    <h2 className="text-xl font-medium mb-1">{opportunities.length} opportunities found</h2>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>Showing results for all locations</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-0 flex items-center">
                    <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
                    <div className="relative">
                      <select className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-border bg-card text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary">
                        <option>Best match</option>
                        <option>Newest first</option>
                        <option>Oldest first</option>
                      </select>
                      <ArrowDownUp className="absolute right-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                {/* Results grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {opportunities.map((opportunity, index) => (
                    <VolunteerCard
                      key={opportunity.id}
                      opportunity={opportunity}
                      className={cn(
                        "transition-all duration-500 delay-[calc(100ms*var(--delay))]",
                        !loaded && "opacity-0 translate-y-4",
                        loaded && "opacity-100 translate-y-0"
                      )}
                      style={{ "--delay": index % 4 } as React.CSSProperties}
                    />
                  ))}
                </div>
                
                {/* Pagination */}
                <div className={cn(
                  "mt-12 flex justify-center transition-all duration-500 delay-300",
                  loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}>
                  <div className="flex items-center space-x-1">
                    <button className="w-10 h-10 flex items-center justify-center rounded-md border border-border hover:bg-secondary transition-standard">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                        <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {[1, 2, 3, 4, 5].map(page => (
                      <button
                        key={page}
                        className={cn(
                          "w-10 h-10 flex items-center justify-center rounded-md transition-standard",
                          page === 1
                            ? "bg-primary text-white"
                            : "border border-border hover:bg-secondary"
                        )}
                      >
                        {page}
                      </button>
                    ))}
                    <button className="w-10 h-10 flex items-center justify-center rounded-md border border-border hover:bg-secondary transition-standard">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                        <path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.1356 3.84188L9.565 7.49991L6.1356 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35986 12.0535 6.67627 12.0433 6.86514 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86514 3.15794C6.67627 2.95648 6.35986 2.94628 6.1584 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Opportunities;
