
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
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
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
      <div className="md:w-1/2">
        <Card className="overflow-hidden h-full border-none shadow-md">
          <div className="relative h-64">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-primary bg-opacity-40"></div>
            </div>
            
            {/* Brand Logo in Background */}
            {brandLogo ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-6 rounded-lg">
                  <img 
                    src={brandLogo} 
                    alt={`${title} brand logo`}
                    className="h-16 w-auto object-contain opacity-80"
                  />
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="h-24 w-24 text-white" />
              </div>
            )}
          </div>
        </Card>
      </div>
      
      <div className="md:w-1/2">
        <h4 className="text-2xl font-bold mb-4 text-primary flex items-center">
          <Icon className="h-6 w-6 mr-2 text-accent" />
          {title}
        </h4>
        <p className="text-gray-600 mb-6">{description}</p>
        
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
        
        <Button className="mt-6 bg-accent hover:bg-accent/90" asChild>
          <Link to={`/products/arneg/${id}`}>
            View All {title}
          </Link>
        </Button>
      </div>
    </div>
  );
};
