import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface NavigationProps {
  isScrolled: boolean;
}

export const Navigation = ({
  isScrolled
}: NavigationProps) => {
  const isMobile = window.innerWidth < 768; // md breakpoint

  const handleAboutClick = () => {
    // If we're already on the home page, just scroll to the section
    if (window.location.pathname === '/') {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If we're on a different page, navigate to home with hash (handled by useEffect in Introduction)
  };

  return <NavigationMenu orientation={isMobile ? "vertical" : "horizontal"} className={isMobile ? "w-full" : ""}>
      <NavigationMenuList className={`${isScrolled ? "text-primary" : "text-primary font-medium"} ${isMobile ? "flex-col items-start space-y-4" : "flex-row items-center space-x-4"}`}>
        <NavigationMenuItem className={isMobile ? "w-full" : ""}>
          <NavigationMenuTrigger className={`${isMobile ? "w-full" : ""} hover:${isScrolled ? "bg-primary/10" : "bg-white/20"} text-[#EA384C] font-bold`}>
            Arneg
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px] bg-white">
              <div className="text-sm">
                <h4 className="font-medium leading-none mb-3 text-primary">Products</h4>
                <p className="text-muted-foreground mb-2">Commercial Refrigeration Solutions</p>
                <Link 
                  to="/products/arneg" 
                  className="flex items-center text-sm text-primary hover:underline"
                >
                  View Arneg Products <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className={isMobile ? "w-full" : ""}>
          <NavigationMenuTrigger className={`${isMobile ? "w-full" : ""} hover:${isScrolled ? "bg-primary/10" : "bg-white/20"}`}>
            Condensing Units
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px] bg-white">
              <div className="text-sm">
                <h4 className="font-medium leading-none mb-3 text-primary text-red-700">Units - Coming Soon</h4>
                <p className="text-muted-foreground">Industrial Condensing Solutions</p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className={isMobile ? "w-full" : ""}>
          <NavigationMenuLink asChild>
            <Link 
              to="/#about"
              onClick={handleAboutClick}
              className={`${isMobile ? "w-full" : ""} hover:${isScrolled ? "bg-primary/10" : "bg-white/20"} group inline-flex h-10 items-center ${isMobile ? "justify-start" : "justify-center"} rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
            >
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>;
};
