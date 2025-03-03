
import React, { useState, useEffect } from "react";
import { Search, ChevronRight, Building, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

interface Organization {
  id: string;
  name: string;
  logo?: string;
  category: string;
  location: string;
  description: string;
  activeOpportunities: number;
  verified: boolean;
}

const Organizations = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const organizations: Organization[] = [
    {
      id: "1",
      name: "Green Earth Initiative",
      category: "Environment",
      location: "San Francisco, CA",
      description: "Working to protect and restore natural ecosystems through community-based conservation projects.",
      activeOpportunities: 5,
      verified: true
    },
    {
      id: "2",
      name: "Education for All",
      category: "Education",
      location: "Remote",
      description: "Improving access to quality education for underserved communities through tutoring and mentorship.",
      activeOpportunities: 8,
      verified: true
    },
    {
      id: "3",
      name: "Community Pantry",
      category: "Food Security",
      location: "Chicago, IL",
      description: "Fighting hunger by distributing food to those in need and addressing the root causes of food insecurity.",
      activeOpportunities: 3,
      verified: true
    },
    {
      id: "4",
      name: "Nature Rescue",
      category: "Animal Welfare",
      location: "Portland, OR",
      description: "Rescuing, rehabilitating, and releasing injured wildlife, while educating the public about conservation.",
      activeOpportunities: 6,
      verified: true
    },
    {
      id: "5",
      name: "City Relief",
      category: "Homelessness",
      location: "New York, NY",
      description: "Providing essential services and support to homeless individuals while working toward sustainable housing solutions.",
      activeOpportunities: 4,
      verified: true
    },
    {
      id: "6",
      name: "Elder Care Alliance",
      category: "Senior Services",
      location: "Boston, MA",
      description: "Enhancing the quality of life for seniors through companionship programs and specialized support services.",
      activeOpportunities: 7,
      verified: false
    },
    {
      id: "7",
      name: "Ocean Conservation Network",
      category: "Environment",
      location: "Miami, FL",
      description: "Protecting marine ecosystems through beach cleanups, research, and advocacy for sustainable ocean policies.",
      activeOpportunities: 2,
      verified: true
    },
    {
      id: "8",
      name: "Digital Literacy Foundation",
      category: "Education",
      location: "Remote",
      description: "Bridging the digital divide by providing technology education to disadvantaged communities.",
      activeOpportunities: 5,
      verified: false
    }
  ];

  // Categories for filter
  const categories = [
    "All Categories", "Environment", "Education", "Health", "Animal Welfare", 
    "Arts & Culture", "Social Justice", "Senior Services", "Homelessness", "Food Security"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <section className="bg-primary/5 border-b border-border py-12">
          <div className="section-container">
            <div className={cn(
              "max-w-2xl transition-all duration-500",
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">Find organizations making an impact</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Discover nonprofits and community groups seeking volunteers to help further their mission.
              </p>
              
              {/* Search bar */}
              <div className="flex w-full max-w-xl rounded-xl overflow-hidden border border-border shadow-sm bg-background">
                <div className="flex-grow flex items-center px-4">
                  <Search className="h-5 w-5 text-muted-foreground mr-2" />
                  <input
                    type="text"
                    placeholder="Search organizations..."
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
        
        {/* Categories filter */}
        <section className="py-8 border-b border-border">
          <div className="section-container">
            <div className={cn(
              "flex flex-wrap gap-2 transition-all duration-500 delay-100",
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-standard",
                    index === 0
                      ? "bg-primary text-white"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Organizations list */}
        <section className="py-12">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {organizations.map((org, index) => (
                <Link
                  key={org.id}
                  to={`/organizations/${org.id}`}
                  className={cn(
                    "flex group rounded-xl overflow-hidden border border-border shadow-card bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                    "transition-all duration-500 delay-[calc(100ms*var(--delay))]",
                    !loaded && "opacity-0 translate-y-4",
                    loaded && "opacity-100 translate-y-0"
                  )}
                  style={{ "--delay": index % 4 } as React.CSSProperties}
                >
                  {/* Organization logo placeholder */}
                  <div className="w-24 h-auto md:w-32 bg-secondary flex items-center justify-center p-4">
                    <div className="w-full aspect-square rounded-full bg-primary/10 flex items-center justify-center text-primary font-display text-2xl font-semibold">
                      {org.name.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <h3 className="font-medium text-lg group-hover:text-primary transition-standard">
                            {org.name}
                          </h3>
                          {org.verified && (
                            <CheckCircle className="h-4 w-4 ml-1.5 text-primary" />
                          )}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground space-x-3 mb-2">
                          <span>{org.category}</span>
                          <span>•</span>
                          <span>{org.location}</span>
                        </div>
                      </div>
                      
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                    
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                      {org.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Building className="h-3.5 w-3.5 mr-1.5" />
                        <span>Since 2018</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-3.5 w-3.5 mr-1.5" />
                        <span>25-50 volunteers</span>
                      </div>
                      <div className="flex items-center text-primary font-medium">
                        <Award className="h-3.5 w-3.5 mr-1.5" />
                        <span>{org.activeOpportunities} opportunities</span>
                      </div>
                    </div>
                  </div>
                </Link>
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
                {[1, 2, 3].map(page => (
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
        </section>
        
        {/* Join as organization */}
        <section className={cn(
          "py-16 bg-secondary/50 border-t border-border transition-all duration-500 delay-400",
          loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}>
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-display font-semibold">
                Are you an organization looking for volunteers?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join our platform to connect with passionate volunteers who want to help further your mission. Post opportunities, manage applications, and track impact all in one place.
              </p>
              <div className="pt-4">
                <Link
                  to="/organization-signup"
                  className="btn-hover-effect inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-sm hover:shadow-md"
                >
                  Register your organization
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Organizations;
