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
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/lovable-uploads/5f5aacb8-6e91-4b91-9187-4f920bfdb2fa.png"
              alt="ILK Technologies"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation - Centered */}
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList className={isScrolled ? "text-white" : "text-white"}>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:bg-white/10">Arneg</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] bg-white">
                      <div className="text-sm">
                        <h4 className="font-medium leading-none mb-3 text-primary">Products</h4>
                        <p className="text-muted-foreground">Commercial Refrigeration Solutions</p>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:bg-white/10">Condensing Units</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] bg-white">
                      <div className="text-sm">
                        <h4 className="font-medium leading-none mb-3 text-primary">Units</h4>
                        <p className="text-muted-foreground">Industrial Condensing Solutions</p>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:bg-white/10 group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:bg-white/10">News</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] bg-white">
                      <div className="text-sm">
                        <h4 className="font-medium leading-none mb-3 text-primary">Latest Updates</h4>
                        <p className="text-muted-foreground">Stay informed with our latest news and developments</p>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search and Contact - Right aligned */}
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-[200px] h-9 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
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
      </div>
    </header>
  );
};