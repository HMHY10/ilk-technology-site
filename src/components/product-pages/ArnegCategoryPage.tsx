
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

// Type definitions for product data
interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

interface CategoryData {
  id: string;
  title: string;
  description: string;
  products: ProductItem[];
}

export const ArnegCategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [categoryData, setCategoryData] = useState<CategoryData | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulated data fetching - in a real app, this would come from an API
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      // Sample data - in a real application, this would be fetched from an API
      const mockData: Record<string, CategoryData> = {
        'refrigerated-cabinets': {
          id: 'refrigerated-cabinets',
          title: 'Refrigerated Cabinets',
          description: 'Premium display solutions for food retail with optimal temperature control.',
          products: [
            {
              id: 'serve-over-counters',
              name: 'Serve-over Counters',
              description: 'High-visibility refrigerated display counters for assisted service.',
              image: '/lovable-uploads/00167a73-438d-4e7e-862d-31ff4ffcbdf2.png',
              features: [
                'Optimal product visibility',
                'Modular design for flexible layout',
                'Energy-efficient cooling system',
                'Customizable finishes'
              ]
            },
            {
              id: 'multi-deck-cabinets',
              name: 'Multi-deck Cabinets',
              description: 'Vertical refrigerated cabinets with multiple display levels.',
              image: '/lovable-uploads/00167a73-438d-4e7e-862d-31ff4ffcbdf2.png',
              features: [
                'Maximum display capacity',
                'Superior temperature stability',
                'LED lighting for enhanced visibility',
                'Night blinds for energy saving'
              ]
            },
            // More products would be defined here
          ]
        },
        'refrigeration-systems': {
          id: 'refrigeration-systems',
          title: 'Refrigeration Systems',
          description: 'Efficient and sustainable cooling solutions for commercial applications.',
          products: [
            {
              id: 'co2-refrigeration-systems',
              name: 'CO₂ Refrigeration Systems',
              description: 'Environmentally friendly refrigeration systems using CO₂ as refrigerant.',
              image: '/lovable-uploads/4d5b979d-be0d-4bee-b458-3d6b9fa1dcb0.png',
              features: [
                'Low environmental impact',
                'High energy efficiency',
                'Advanced control systems',
                'Reduced operating costs'
              ]
            },
            // More products would be defined here
          ]
        },
        // More categories would be defined here
      };
      
      if (categoryId && mockData[categoryId]) {
        setCategoryData(mockData[categoryId]);
      }
      
      setLoading(false);
    }, 500); // Simulate loading delay
    
    return () => clearTimeout(timer);
  }, [categoryId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <Skeleton className="h-6 w-full mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardContent className="p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!categoryData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="section-title mb-6">Category Not Found</h1>
        <p className="text-lg mb-8">The product category you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/products/arneg">Back to All Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Button variant="outline" className="mb-4" asChild>
          <Link to="/products/arneg">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to All Products
          </Link>
        </Button>
        <h1 className="section-title mb-4">{categoryData.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{categoryData.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryData.products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-4">
                <h4 className="font-bold text-sm text-gray-500 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
