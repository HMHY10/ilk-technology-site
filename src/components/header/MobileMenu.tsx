import { MoreVertical } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Navigation } from "./Navigation";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="p-2">
        <MoreVertical className="h-6 w-6 text-primary" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-white">
        <div className="mt-6">
          <Navigation isScrolled={true} />
        </div>
      </SheetContent>
    </Sheet>
  );
};