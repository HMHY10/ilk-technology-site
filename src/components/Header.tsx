import { Search, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
      isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Search and Contact - Left aligned */}
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-[200px] h-9 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="/lovable-uploads/c0b611d6-f82a-49c1-943e-6c6863a772ef.png"
              alt="ILK Technologies"
              className="h-12 w-auto"
            />
          </div>

          {/* Contact Info - Right aligned */}
          <div className="flex flex-col items-end justify-center gap-1">
            <a href="tel:+15551234567" className={`flex items-center gap-2 text-sm ${
              isScrolled ? "text-white" : "text-white"
            } hover:text-accent`}>
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="mailto:info@ilktechnologies.com" className={`flex items-center gap-2 text-sm ${
              isScrolled ? "text-white" : "text-white"
            } hover:text-accent`}>
              <Mail className="h-4 w-4" />
              <span>info@ilktechnologies.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};