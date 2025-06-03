
import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url?: string;
  action?: () => void;
  keywords?: string[];
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  clearSearch: () => void;
}

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

  // Define all searchable content
  const searchableData: SearchResult[] = useMemo(() => [
    // Services
    {
      id: 'service-cooling',
      title: 'Commercial Cooling',
      description: 'State-of-the-art refrigeration systems for businesses',
      category: 'Services',
      keywords: ['cooling', 'refrigeration', 'commercial', 'business', 'systems'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    {
      id: 'service-industrial',
      title: 'Industrial Solutions',
      description: 'Large-scale industrial refrigeration installations',
      category: 'Services',
      keywords: ['industrial', 'large-scale', 'installations', 'solutions'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    {
      id: 'service-maintenance',
      title: 'Maintenance',
      description: '24/7 maintenance and repair services',
      category: 'Services',
      keywords: ['maintenance', 'repair', '24/7', 'service', 'support'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    {
      id: 'service-support',
      title: 'Support',
      description: 'Expert technical support and consultation',
      category: 'Services',
      keywords: ['support', 'technical', 'expert', 'consultation', 'help'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    // Product Categories
    {
      id: 'category-commercial-refrigeration',
      title: 'Commercial Refrigeration',
      description: 'Display cases, coolers, and freezers for retail environments',
      category: 'Product Categories',
      keywords: ['commercial', 'refrigeration', 'display', 'cases', 'coolers', 'freezers', 'retail'],
      url: '/products/arneg'
    },
    {
      id: 'category-display-cases',
      title: 'Display Cases',
      description: 'Premium display solutions for food retail',
      category: 'Product Categories',
      keywords: ['display', 'cases', 'premium', 'food', 'retail', 'showcase'],
      url: '/products/intrac'
    },
    {
      id: 'category-condensing-units',
      title: 'Condensing Units',
      description: 'High-efficiency condensing units for various applications',
      category: 'Product Categories',
      keywords: ['condensing', 'units', 'efficiency', 'applications']
    },
    // Brands
    {
      id: 'brand-arneg',
      title: 'Arneg',
      description: 'Italian-crafted commercial refrigeration solutions',
      category: 'Brands',
      keywords: ['arneg', 'italian', 'crafted', 'premium', 'quality'],
      url: '/products/arneg'
    },
    {
      id: 'brand-oscartielle',
      title: 'Oscartielle',
      description: 'Commercial refrigeration equipment',
      category: 'Brands',
      keywords: ['oscartielle', 'equipment'],
      url: '/products/oscartielle'
    },
    {
      id: 'brand-intrac',
      title: 'INTRAC',
      description: 'Display case solutions',
      category: 'Brands',
      keywords: ['intrac', 'display', 'solutions'],
      url: '/products/intrac'
    },
    // Product Features
    {
      id: 'feature-security',
      title: 'Advanced Security',
      description: 'State-of-the-art security features ensuring your equipment safety',
      category: 'Product Features',
      keywords: ['security', 'advanced', 'safety', 'protection', 'features'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    {
      id: 'feature-energy',
      title: 'Energy Efficient',
      description: 'Optimized power consumption for reduced operational costs',
      category: 'Product Features',
      keywords: ['energy', 'efficient', 'power', 'consumption', 'costs', 'optimized'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    {
      id: 'feature-eco',
      title: 'Eco-Friendly',
      description: 'Sustainable solutions with minimal environmental impact',
      category: 'Product Features',
      keywords: ['eco', 'friendly', 'sustainable', 'environmental', 'green'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    // Company Capabilities
    {
      id: 'capability-iso',
      title: 'ISO Certified',
      description: 'Internationally recognized quality management standards',
      category: 'Company',
      keywords: ['iso', 'certified', 'quality', 'standards', 'international'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('excellence')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    {
      id: 'capability-safety',
      title: 'Safety First',
      description: 'Rigorous safety protocols and compliance measures',
      category: 'Company',
      keywords: ['safety', 'protocols', 'compliance', 'measures', 'rigorous'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('excellence')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    {
      id: 'capability-expert',
      title: 'Expert Team',
      description: 'Highly trained and certified technicians',
      category: 'Company',
      keywords: ['expert', 'team', 'trained', 'certified', 'technicians'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('excellence')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    {
      id: 'capability-support-24',
      title: '24/7 Support',
      description: 'Round-the-clock emergency service availability',
      category: 'Company',
      keywords: ['24/7', 'support', 'emergency', 'service', 'availability', 'round-the-clock'],
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('excellence')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  ], [navigate]);

  // Enhanced search function with better matching
  const searchResults = useMemo(() => {
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
