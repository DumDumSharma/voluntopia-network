
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 border-t border-border">
      {/* Main footer content */}
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand column */}
          <div className="space-y-4">
            <Link to="/" className="text-primary font-display text-xl font-semibold transition-standard hover:opacity-80">
              <span className="text-foreground">Volun</span>
              <span className="text-primary">topia</span>
            </Link>
            <p className="text-muted-foreground">
              Connecting passionate volunteers with meaningful opportunities to make a difference.
            </p>
            <div className="flex space-x-4 pt-2">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-standard"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">For Volunteers</h4>
            <ul className="space-y-2.5">
              {["Find Opportunities", "Create Profile", "Track Hours", "Success Stories"].map((item, index) => (
                <li key={index}>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-standard">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold">For Organizations</h4>
            <ul className="space-y-2.5">
              {["Post Opportunities", "Manage Volunteers", "Impact Reporting", "Testimonials"].map((item, index) => (
                <li key={index}>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-standard">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest opportunities and news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
              <button
                type="button"
                className="btn-hover-effect px-3 py-2 rounded-r-lg bg-primary text-white flex items-center justify-center"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-border py-6">
        <div className="section-container flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {new Date().getFullYear()} Voluntopia. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-standard">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary transition-standard">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-primary transition-standard">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
