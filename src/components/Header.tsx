import { Search, Phone, Mail } from "lucide-react";
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
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img
            src="/lovable-uploads/5f5aacb8-6e91-4b91-9187-4f920bfdb2fa.png"
            alt="ILK Technologies"
            className="h-12 w-auto"
          />

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Arneg</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="text-sm">
                      <h4 className="font-medium leading-none mb-3">Products</h4>
                      <p className="text-muted-foreground">Commercial Refrigeration Solutions</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="text-sm">
                      <h4 className="font-medium leading-none mb-3">Company</h4>
                      <p className="text-muted-foreground">Learn about our history and mission</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="text-sm">
                      <h4 className="font-medium leading-none mb-3">Get in Touch</h4>
                      <p className="text-muted-foreground">Find our location and contact details</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search and Contact */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-[200px] h-9"
              />
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-sm text-primary hover:text-accent">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="mailto:info@ilktechnologies.com" className="flex items-center gap-2 text-sm text-primary hover:text-accent">
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