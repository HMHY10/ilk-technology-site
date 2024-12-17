import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  isScrolled: boolean;
}

export const SearchBar = ({ isScrolled }: SearchBarProps) => (
  <div className="relative hidden md:block">
    <Search
      className={`absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
        isScrolled ? "text-primary" : "text-white"
      }`}
    />
    <Input
      type="search"
      placeholder="Search..."
      className={`pl-8 w-[200px] h-9 ${
        isScrolled
          ? "bg-primary/10 border-primary/20 text-primary placeholder:text-primary/60"
          : "bg-white/10 border-white/20 text-white placeholder:text-white/60"
      }`}
    />
  </div>
);