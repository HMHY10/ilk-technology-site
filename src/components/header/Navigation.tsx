import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  isScrolled: boolean;
}

export const Navigation = ({ isScrolled }: NavigationProps) => (
  <NavigationMenu orientation="vertical" className="w-full">
    <NavigationMenuList className={`${isScrolled ? "text-primary" : "text-white"} flex-col items-start space-y-4`}>
      <NavigationMenuItem className="w-full">
        <NavigationMenuTrigger 
          className={`w-full hover:${isScrolled ? "bg-primary/10" : "bg-white/10"} text-[#EA384C]`}
        >
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

      <NavigationMenuItem className="w-full">
        <NavigationMenuTrigger className={`w-full hover:${isScrolled ? "bg-primary/10" : "bg-white/10"}`}>
          Condensing Units
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-6 w-[400px] bg-white">
            <div className="text-sm">
              <h4 className="font-medium leading-none mb-3 text-primary">Units</h4>
              <p className="text-muted-foreground">Industrial Condensing Solutions</p>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem className="w-full">
        <NavigationMenuLink
          className={`w-full hover:${
            isScrolled ? "bg-primary/10" : "bg-white/10"
          } group inline-flex h-10 items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
        >
          About
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);