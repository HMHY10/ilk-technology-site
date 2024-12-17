import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const ProductSelection = () => {
  const products = [
    {
      title: "Serve-over",
      image: "/lovable-uploads/f0fa7d81-d6d4-4bcb-9f72-692d1a351690.png",
      link: "#serve-over"
    },
    {
      title: "Island and horizontal",
      image: "/lovable-uploads/f0fa7d81-d6d4-4bcb-9f72-692d1a351690.png",
      link: "#island-horizontal"
    },
    {
      title: "Semi-vertical",
      image: "/lovable-uploads/f0fa7d81-d6d4-4bcb-9f72-692d1a351690.png",
      link: "#semi-vertical"
    },
    {
      title: "Vertical",
      image: "/lovable-uploads/f0fa7d81-d6d4-4bcb-9f72-692d1a351690.png",
      link: "#vertical"
    },
    {
      title: "Combined",
      image: "/lovable-uploads/f0fa7d81-d6d4-4bcb-9f72-692d1a351690.png",
      link: "#combined"
    },
    {
      title: "Rear service",
      image: "/lovable-uploads/f0fa7d81-d6d4-4bcb-9f72-692d1a351690.png",
      link: "#rear-service"
    },
    {
      title: "Refrigeration unit components",
      image: "/lovable-uploads/f0fa7d81-d6d4-4bcb-9f72-692d1a351690.png",
      link: "#refrigeration-components"
    },
    {
      title: "Technologies",
      image: "/lovable-uploads/f0fa7d81-d6d4-4bcb-9f72-692d1a351690.png",
      link: "#technologies"
    }
  ];

  return (
    <section className="py-16 bg-[#0A1E3D]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white mb-12 text-center">Our products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <a 
              key={index} 
              href={product.link}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="p-4">
                  <div className="relative mb-4 aspect-square">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between text-white group-hover:text-accent">
                    <span className="text-lg font-medium">{product.title}</span>
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};