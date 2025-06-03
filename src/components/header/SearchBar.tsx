
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/contexts/SearchContext";
import { useRef, useEffect } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  isScrolled: boolean;
}

export const SearchBar = ({ isScrolled }: SearchBarProps) => {
  const { 
    searchQuery, 
    setSearchQuery, 
    searchResults, 
    isSearchOpen, 
    setIsSearchOpen, 
    clearSearch 
  } = useSearch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        clearSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [clearSearch, setIsSearchOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsSearchOpen(value.length > 0);
  };

  const handleResultClick = (result: any) => {
    if (result.url) {
      navigate(result.url);
    } else if (result.action) {
      result.action();
    }
    clearSearch();
  };

  const groupedResults = searchResults.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, typeof searchResults>);

  return (
    <div className="relative hidden md:block">
      <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Search
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                isScrolled ? "text-primary" : "text-primary"
              }`}
            />
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search... (⌘K)"
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => searchQuery && setIsSearchOpen(true)}
              className={`pl-8 pr-8 w-[250px] h-9 ${
                isScrolled
                  ? "bg-primary/10 border-primary/20 text-primary placeholder:text-primary/60"
                  : "bg-white/10 border-white/20 text-primary placeholder:text-primary/60"
              }`}
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                  isScrolled ? "text-primary" : "text-primary"
                } hover:opacity-70`}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[350px] p-0 bg-white border shadow-lg z-50" 
          align="start"
          sideOffset={4}
        >
          <Command>
            <CommandList className="max-h-[300px]">
              {searchResults.length === 0 && searchQuery && (
                <CommandEmpty>No results found for "{searchQuery}"</CommandEmpty>
              )}
              {Object.entries(groupedResults).map(([category, results]) => (
                <CommandGroup key={category} heading={category}>
                  {results.map((result) => (
                    <CommandItem
                      key={result.id}
                      onSelect={() => handleResultClick(result)}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{result.title}</span>
                        <span className="text-xs text-gray-600 line-clamp-1">
                          {result.description}
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
