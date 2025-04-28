import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
interface NavigationProps {
  isScrolled: boolean;
}
export const Navigation = ({
  isScrolled
}: NavigationProps) => {
  const isMobile = window.innerWidth < 768; // md breakpoint

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
                <p className="text-muted-foreground">Commercial Refrigeration Solutions</p>
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
          <NavigationMenuLink className={`${isMobile ? "w-full" : ""} hover:${isScrolled ? "bg-primary/10" : "bg-white/20"} group inline-flex h-10 items-center ${isMobile ? "justify-start" : "justify-center"} rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50`}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>;
};