import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => (
  <div className="relative hidden md:block">
    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
    <Input
      type="search"
      placeholder="Search..."
      className="pl-8 w-[200px] h-9 bg-white/10 border-white/20 text-white placeholder:text-white/60"
    />
  </div>
);