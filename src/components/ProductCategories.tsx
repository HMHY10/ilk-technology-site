import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const ProductCategories = () => {
  const categories = [
    {
      title: "Commercial Refrigeration",
      description: "Display cases, coolers, and freezers for retail environments",
      image: "/lovable-uploads/00167a73-438d-4e7e-862d-31ff4ffcbdf2.png",
      brands: [
        {
          name: "Arneg",
          logo: "/lovable-uploads/54238183-41e7-4493-a407-da223302e60f.png",
          link: "/products/arneg"
        },
        {
          name: "Oscartielle",
          logo: "/lovable-uploads/7c833cb1-70df-440b-9311-9911c75d6cde.png",
          link: "/products/oscartielle"
        }
      ]
    },
    {
      title: "Display Cases",
      description: "Premium display solutions for food retail",
      image: "/lovable-uploads/4d5b979d-be0d-4bee-b458-3d6b9fa1dcb0.png",
      brands: [
        {
          name: "INTRAC",
          logo: "/lovable-uploads/93685d2f-0194-410b-8685-4e05f4c9cb43.png",
          link: "/products/intrac"
        }
      ]
    },
    {
      title: "Condensing Units",
      description: "High-efficiency condensing units for various applications",
      image: "/lovable-uploads/39d7e478-3428-464c-a9fe-a71a59967df1.png",
      comingSoon: true
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12 text-center">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="relative">
              <Card className="h-[300px] overflow-hidden border-none shadow-lg relative group">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0" 
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  {/* Blue Overlay - Reduced opacity from 80% to 40% */}
                  <div className="absolute inset-0 bg-primary bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
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
                    {category.brands && category.brands.length > 0 && (
                      <div className="flex flex-col gap-4 mt-4">
                        {category.brands.map((brand, brandIndex) => (
                          <HoverCard key={brandIndex}>
                            <HoverCardTrigger asChild>
                              <Link 
                                to={brand.link}
                                className="flex items-center gap-2 group/brand"
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                <div className="h-8 bg-white/90 rounded p-1 flex items-center">
                                  <img 
                                    src={brand.logo} 
                                    alt={brand.name}
                                    className="h-6 w-auto object-contain"
                                  />
                                </div>
                                <ChevronRight className="w-4 h-4 text-white transform group-hover/brand:translate-x-1 transition-transform" />
                              </Link>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-fit p-2 text-sm">
                              {brand.name}
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Make the entire card clickable for the main category or first brand if available */}
                  {!category.comingSoon && (
                    <Link 
                      to={category.brands && category.brands.length > 0 ? category.brands[0].link : `/products/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="absolute inset-0 z-5"
                      aria-label={`View ${category.title}`}
                    >
                      <span className="sr-only">View {category.title}</span>
                    </Link>
                  )}
                  
                  {/* Arrow icon for non-coming soon categories */}
                  {!category.comingSoon && (
                    <div className="self-end relative z-10">
                      <ChevronRight className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
