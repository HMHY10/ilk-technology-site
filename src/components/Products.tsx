
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Leaf } from "lucide-react";

export const Products = () => {
  const features = [
    {
      icon: Shield,
      title: "Technologies",
      description: "Improving the energy efficency of our displays",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Optimized power consumption for reduced operational costs",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable solutions with minimal environmental impact",
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12 text-center">New Product Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="service-card">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
