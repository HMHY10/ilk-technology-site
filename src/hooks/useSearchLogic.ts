
import { useMemo } from 'react';
import { SearchResult } from '@/types/search';

export const useSearchLogic = (searchQuery: string, searchableData: SearchResult[]) => {
  return useMemo(() => {
    if (!searchQuery.trim()) {
      console.log('No search query, returning empty results');
      return [];
    }
    
    const query = searchQuery.toLowerCase().trim();
    console.log('Searching for:', query);
    
    const results = searchableData.filter(item => {
      // Check title match
      const titleMatch = item.title.toLowerCase().includes(query);
      
      // Check description match
      const descriptionMatch = item.description.toLowerCase().includes(query);
      
      // Check keywords match
      const keywordMatch = item.keywords?.some(keyword => 
        keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase())
      );
      
      // Check category match
      const categoryMatch = item.category.toLowerCase().includes(query);
      
      // Check partial word matches
      const titleWords = item.title.toLowerCase().split(' ');
      const descriptionWords = item.description.toLowerCase().split(' ');
      const wordMatch = titleWords.some(word => word.startsWith(query)) || 
                       descriptionWords.some(word => word.startsWith(query));
      
      return titleMatch || descriptionMatch || keywordMatch || categoryMatch || wordMatch;
    }).slice(0, 8); // Limit to 8 results
    
    console.log('Search results found:', results.length, results);
    return results;
  }, [searchQuery, searchableData]);
};
