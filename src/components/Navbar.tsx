import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Info, Search, Users, Download, Newspaper, Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground">STEP / STUDY</span>
              <span className="text-[8px] text-muted-foreground">Strengthening Teachers</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                <Info className="w-4 h-4 mr-2" />
                About
              </Button>
            </Link>
            <Link to="/research">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                <Search className="w-4 h-4 mr-2" />
                Research
              </Button>
            </Link>
            <Link to="/team">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                <Users className="w-4 h-4 mr-2" />
                Team
              </Button>
            </Link>
            <Link to="/resources">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                <Download className="w-4 h-4 mr-2" />
                Resources
              </Button>
            </Link>
            <Link to="/news">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                <Newspaper className="w-4 h-4 mr-2" />
                News
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Link to="/login">
              <Button variant="ghost" className="text-foreground">
                Login
              </Button>
            </Link>
            <Link to="/get-started">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
