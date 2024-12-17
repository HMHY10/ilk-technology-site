import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProductCategories = () => {
  const categories = [
    {
      title: "Commercial Refrigeration",
      description: "Display cases, coolers, and freezers for retail environments",
      icon: "🏪",
    },
    {
      title: "Industrial Solutions",
      description: "Large-scale refrigeration systems for industrial facilities",
      icon: "🏭",
    },
    {
      title: "Cold Storage",
      description: "Walk-in coolers and freezers for food service",
      icon: "❄️",
    },
    {
      title: "Display Cases",
      description: "Premium display solutions for food retail",
      icon: "🎪",
    },
    {
      title: "Condensing Units",
      description: "High-efficiency condensing units for various applications",
      icon: "⚡",
    },
    {
      title: "Spare Parts",
      description: "Genuine parts and accessories for maintenance",
      icon: "🔧",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12 text-center">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link to={`/products/${category.title.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
              <Card className="service-card group cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ChevronRight className="w-5 h-5 text-accent transform group-hover:translate-x-2 transition-transform" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};