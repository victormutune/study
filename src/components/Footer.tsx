import { Link } from "react-router-dom";
import { Linkedin, Facebook, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', { 
    hour12: false 
  });

  return (
    <footer className="bg-[#1e293b] text-white">
      <div className="bg-primary py-3">
        <div className="container mx-auto px-4 text-center text-sm text-primary-foreground">
          For immediate inquiries, reach out to our team leaders at each institution
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-8 right-8 bg-primary/20 backdrop-blur-sm rounded-lg p-4 border border-primary/30">
          <div className="text-2xl font-bold">{formattedTime}</div>
          <div className="text-sm opacity-90">{formattedDate.split(',')[0]}</div>
          <div className="text-xs opacity-75">{formattedDate.split(',').slice(1).join(',').trim()}</div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold">
                  S
                </div>
                <span className="text-xl font-bold">STEP-STUDY</span>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Strengthening teacher capacity and advancing education outcomes through collaborative research and innovation.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/research" className="hover:text-primary transition-colors">Research</Link></li>
                <li><Link to="/team" className="hover:text-primary transition-colors">Team</Link></li>
                <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
                <li><Link to="/news" className="hover:text-primary transition-colors">News</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Partner Institutions</h3>
              <ul className="space-y-2 text-sm">
                <li>University of Dodoma</li>
                <li>Arusha Technical College</li>
                <li>University of Graz</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">📧</span>
                  <span>info@step-study.org</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📞</span>
                  <span>+255 123 456 789</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>University of Dodoma<br />Dodoma, Tanzania</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="opacity-75">© 2024 STEP-STUDY. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
