
import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContextType } from '@/types/search';
import { getSearchableData } from '@/data/searchableData';
import { useSearchLogic } from '@/hooks/useSearchLogic';

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  // Get searchable data
  const searchableData = useMemo(() => getSearchableData(navigate), [navigate]);

  // Use search logic hook
  const searchResults = useSearchLogic(searchQuery, searchableData);

  const clearSearch = useCallback(() => {
    console.log('Clearing search');
    setSearchQuery('');
    setIsSearchOpen(false);
  }, []);

  const value = {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearchOpen,
    setIsSearchOpen,
    clearSearch
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
