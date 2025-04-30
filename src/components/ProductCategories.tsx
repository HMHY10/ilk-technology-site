
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProductCategories = () => {
  const categories = [
    {
      title: "Commercial Refrigeration",
      description: "Display cases, coolers, and freezers for retail environments",
      image: "/lovable-uploads/76b23ff7-efa3-486a-9543-807697ddd20b.png",
      brands: [
        {
          name: "Arneg",
          link: "/products/arneg"
        },
        {
          name: "Oscartielle",
          link: "/products/oscartielle"
        }
      ]
    },
    {
      title: "Display Cases",
      description: "Premium display solutions for food retail",
      image: "/lovable-uploads/5f5aacb8-6e91-4b91-9187-4f920bfdb2fa.png",
      brands: [
        {
          name: "INTRAC",
          link: "/products/intrac"
        }
      ]
    },
    {
      title: "Condensing Units",
      description: "High-efficiency condensing units for various applications",
      image: "/lovable-uploads/69640c38-17ed-4b5c-a463-2ea2eb609240.png",
      comingSoon: true
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12 text-center">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              to={category.comingSoon ? "#" : `/products/${category.title.toLowerCase().replace(/\s+/g, '-')}`} 
              key={index}
              className={`relative ${category.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
              onClick={(e) => category.comingSoon && e.preventDefault()}
            >
              <Card className="h-[300px] overflow-hidden border-none shadow-lg relative group">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0" 
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  {/* Blue Overlay */}
                  <div className="absolute inset-0 bg-primary bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
                </div>
                
                <CardContent className="p-8 relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {category.title}
                    </h3>
                    <p className="text-white/80 mb-4">{category.description}</p>
                    
                    {/* Coming Soon Notice */}
                    {category.comingSoon && (
                      <div className="inline-block bg-accent px-4 py-1 rounded-md text-white font-medium">
                        Coming Soon
                      </div>
                    )}
                    
                    {/* Brand Logos */}
                    {category.brands && (
                      <div className="flex flex-col gap-2 mt-4">
                        {category.brands.map((brand, brandIndex) => (
                          <span 
                            key={brandIndex}
                            className="text-white hover:text-accent font-medium transition-colors inline-flex items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Navigation would be handled by the parent Link component
                            }}
                          >
                            {brand.name}
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Arrow icon for non-coming soon categories */}
                  {!category.comingSoon && (
                    <div className="self-end">
                      <ChevronRight className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
