import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Snowflake } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const BrandCarousel = () => {
  const brands = [
    { 
      name: "Shelving and check-outs",
      logo: "/lovable-uploads/93685d2f-0194-410b-8685-4e05f4c9cb43.png"
    },
    {
      name: "Commercial Refrigeration",
      logo: "/lovable-uploads/7c833cb1-70df-440b-9311-9911c75d6cde.png"
    },
    {
      name: "Cold Rooms, isothermal and High-Speed Doors",
      logo: "/lovable-uploads/d47e8a46-3c00-48b8-8581-29ced4362b4c.png"
    },
    { 
      name: "Commercial Refrigeration",
      logo: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png"
    },
  ];

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnLastSnap: false
    })
  );

  return (
    <div className="absolute bottom-8 left-0 right-0 z-20">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <div className="flex h-24 items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-center">
                    {brand.logo ? (
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="mx-auto mb-2 h-12 w-auto object-contain"
                      />
                    ) : (
                      <Snowflake className="mx-auto mb-2 h-6 w-6 text-white" />
                    )}
                    <p className="text-sm font-mono text-white/80">{brand.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-white/20 bg-white/10 text-white hover:bg-white/20" />
          <CarouselNext className="border-white/20 bg-white/10 text-white hover:bg-white/20" />
        </Carousel>
      </div>
    </div>
  );
};
