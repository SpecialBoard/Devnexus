import { Link } from "react-router";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card dark:bg-transparent border-t border-border mt-20 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl mb-4 font-bold text-foreground dark:text-white">
              DevNexus
            </div>
            <p className="text-muted-foreground dark:text-white/80 mb-4">
              Empowering students with real industry experience through paid internship opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-foreground dark:text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-foreground dark:text-white font-semibold">Programs</h3>
            <ul className="space-y-2 text-muted-foreground dark:text-white/80">
              <li>IT & Development</li>
              <li>Digital Marketing</li>
              <li>Data Science</li>
              <li>UI/UX Design</li>
              <li>Cybersecurity</li>
              <li>Finance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-foreground dark:text-white font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground dark:text-white/80">
                <Mail size={18} />
                <span>support@devnexus.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground dark:text-white/80">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground dark:text-white/60 text-sm mb-4 md:mb-0">
            © 2026 DevNexus. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
