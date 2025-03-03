
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Users, Clock, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface VolunteerOpportunity {
  id: string;
  title: string;
  organization: string;
  organizationLogo?: string;
  location: string;
  commitment: string;
  requiredSkills: string[];
  image?: string;
  matchPercentage?: number;
  featured?: boolean;
}

interface VolunteerCardProps {
  opportunity: VolunteerOpportunity;
  className?: string;
}

const VolunteerCard = ({ opportunity, className }: VolunteerCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const defaultImage = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&auto=format&fit=crop&q=80";
  const imageSrc = opportunity.image || defaultImage;

  return (
    <Link
      to={`/opportunities/${opportunity.id}`}
      className={cn(
        "group flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-card transition-standard hover:shadow-lg hover:-translate-y-1",
        opportunity.featured && "ring-2 ring-primary/20",
        className
      )}
    >
      <div className="relative w-full h-48 overflow-hidden">
        {/* Image */}
        <div className="image-loading w-full h-full">
          <img
            src={imageSrc}
            alt={opportunity.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105",
              imageLoaded ? "image-loaded" : "image-loading-blur"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Favorite button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center shadow-sm transition-standard hover:scale-105 z-10"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-standard",
              isFavorite ? "fill-destructive text-destructive" : "text-foreground/70"
            )}
          />
        </button>
        
        {/* Match indicator */}
        {opportunity.matchPercentage && (
          <div className="absolute top-3 left-3 glass px-2.5 py-1 rounded-full text-xs font-medium z-10">
            {opportunity.matchPercentage}% match
          </div>
        )}
        
        {/* Featured badge */}
        {opportunity.featured && (
          <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-xs font-medium z-10">
            Featured
          </div>
        )}
        
        {/* Organization logo */}
        <div className="absolute -bottom-5 right-4 w-10 h-10 rounded-full border-2 border-background bg-background shadow-sm flex items-center justify-center overflow-hidden">
          {opportunity.organizationLogo ? (
            <img 
              src={opportunity.organizationLogo} 
              alt={opportunity.organization} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
              {opportunity.organization.charAt(0)}
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow p-5 space-y-4">
        <div className="space-y-1">
          <h3 className="font-medium text-lg line-clamp-1 group-hover:text-primary transition-standard">
            {opportunity.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {opportunity.organization}
          </p>
        </div>
        
        <div className="space-y-2 flex-grow">
          <div className="flex items-center text-sm text-foreground/70">
            <MapPin className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            <span className="truncate">{opportunity.location}</span>
          </div>
          <div className="flex items-center text-sm text-foreground/70">
            <Clock className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            <span>{opportunity.commitment}</span>
          </div>
        </div>
        
        <div className="pt-1">
          <div className="flex flex-wrap gap-1.5">
            {opportunity.requiredSkills.slice(0, 3).map((skill, index) => (
              <span 
                key={index}
                className="inline-flex px-2 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
            {opportunity.requiredSkills.length > 3 && (
              <span className="inline-flex px-2 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground">
                +{opportunity.requiredSkills.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-5 pt-0 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-3.5 w-3.5 mr-1.5" />
          <span>8 spots left</span>
        </div>
        <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
          <span>View details</span>
          <ExternalLink className="h-3.5 w-3.5 ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default VolunteerCard;
