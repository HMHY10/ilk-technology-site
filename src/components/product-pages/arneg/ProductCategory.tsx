
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export interface SubCategory {
  name: string;
  link: string;
}

export interface ProductCategoryProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  subCategories: SubCategory[];
  image: string;
  brandLogo?: string;
  isReversed?: boolean;
}

export const ProductCategory = ({
  id,
  title,
  description,
  icon: Icon,
  subCategories,
  image,
  brandLogo,
  isReversed = false
}: ProductCategoryProps) => {
  // Check if this is the Refrigerated Cabinets category with 7 items
  const hasTwoColumns = subCategories.length === 7;
  
  // Special link for refrigerated cabinets to go to the new dynamic page
  const viewAllLink = id === "refrigerated-cabinets" 
    ? "/products/arneg/refrigerated-cabinets" 
    : `/products/arneg/${id}`;
  
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
      <div className={`${hasTwoColumns ? 'md:w-2/5' : 'md:w-1/2'}`}>
        <div className="overflow-hidden h-full">
          <div className={`relative ${hasTwoColumns ? 'h-56' : 'h-64'}`}>
            {/* Brand Logo as Full Background Image - No overlays or borders */}
            {brandLogo ? (
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${brandLogo})` }}
              ></div>
            ) : (
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            )}
          </div>
        </div>
      </div>
      
      <div className={`${hasTwoColumns ? 'md:w-3/5' : 'md:w-1/2'}`}>
        <h4 className="text-2xl font-bold mb-4 text-primary flex items-center">
          <Icon className="h-6 w-6 mr-2 text-accent" />
          {title}
        </h4>
        <p className="text-gray-600 mb-6">{description}</p>
        
        {hasTwoColumns ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {subCategories.map((subcat, idx) => (
              <Link 
                key={idx} 
                to={subcat.link}
                className="block py-2 px-4 rounded-md transition-colors hover:bg-gray-100 flex items-center"
              >
                <ChevronRight className="h-5 w-5 text-accent mr-2" />
                <span>{subcat.name}</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {subCategories.map((subcat, idx) => (
              <Link 
                key={idx} 
                to={subcat.link}
                className="block py-2 px-4 rounded-md transition-colors hover:bg-gray-100 flex items-center"
              >
                <ChevronRight className="h-5 w-5 text-accent mr-2" />
                <span>{subcat.name}</span>
              </Link>
            ))}
          </div>
        )}
        
        <Button className="mt-6 bg-accent hover:bg-accent/90" asChild>
          <Link to={viewAllLink}>
            View All {title}
          </Link>
        </Button>
      </div>
    </div>
  );
};
