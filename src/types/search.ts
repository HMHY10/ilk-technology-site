
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url?: string;
  action?: () => void;
  keywords?: string[];
}

export interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  clearSearch: () => void;
}
