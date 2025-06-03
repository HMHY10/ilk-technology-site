
import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url?: string;
  action?: () => void;
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
      url: '/products/arneg'
    },
    {
      id: 'category-display-cases',
      title: 'Display Cases',
      description: 'Premium display solutions for food retail',
      category: 'Product Categories',
      url: '/products/intrac'
    },
    {
      id: 'category-condensing-units',
      title: 'Condensing Units',
      description: 'High-efficiency condensing units for various applications',
      category: 'Product Categories'
    },
    // Brands
    {
      id: 'brand-arneg',
      title: 'Arneg',
      description: 'Italian-crafted commercial refrigeration solutions',
      category: 'Brands',
      url: '/products/arneg'
    },
    {
      id: 'brand-oscartielle',
      title: 'Oscartielle',
      description: 'Commercial refrigeration equipment',
      category: 'Brands',
      url: '/products/oscartielle'
    },
    {
      id: 'brand-intrac',
      title: 'INTRAC',
      description: 'Display case solutions',
      category: 'Brands',
      url: '/products/intrac'
    },
    // Product Features
    {
      id: 'feature-security',
      title: 'Advanced Security',
      description: 'State-of-the-art security features ensuring your equipment safety',
      category: 'Product Features',
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
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('excellence')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  ], [navigate]);

  // Search function with debouncing
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return searchableData.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    ).slice(0, 8); // Limit to 8 results
  }, [searchQuery, searchableData]);

  const clearSearch = useCallback(() => {
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
