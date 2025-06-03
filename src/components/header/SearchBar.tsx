
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
    console.log('Search input changed:', value); // Debug log
    setSearchQuery(value);
    // Always open dropdown when there's text, regardless of results
    setIsSearchOpen(value.length > 0);
  };

  const handleInputFocus = () => {
    console.log('Search input focused, query:', searchQuery); // Debug log
    if (searchQuery.length > 0) {
      setIsSearchOpen(true);
    }
  };

  const handleResultClick = (result: any) => {
    console.log('Search result clicked:', result); // Debug log
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

  console.log('Current search state:', { searchQuery, searchResults: searchResults.length, isSearchOpen }); // Debug log

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
              onFocus={handleInputFocus}
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
          className="w-[350px] p-0 bg-white border shadow-xl z-[100]" 
          align="start"
          sideOffset={4}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command shouldFilter={false}>
            <CommandList className="max-h-[300px]">
              {searchResults.length === 0 && searchQuery && (
                <CommandEmpty className="py-6 text-center text-sm">
                  No results found for "{searchQuery}"
                </CommandEmpty>
              )}
              {searchResults.length === 0 && !searchQuery && (
                <div className="py-6 text-center text-sm text-gray-500">
                  Start typing to search...
                </div>
              )}
              {Object.entries(groupedResults).map(([category, results]) => (
                <CommandGroup key={category} heading={category}>
                  {results.map((result) => (
                    <CommandItem
                      key={result.id}
                      onSelect={() => handleResultClick(result)}
                      className="cursor-pointer px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex flex-col w-full">
                        <span className="font-medium text-sm text-gray-900">{result.title}</span>
                        <span className="text-xs text-gray-600 line-clamp-2 mt-1">
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
