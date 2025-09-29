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
      name: "Commercial Refrigeration",
      logo: "/lovable-uploads/54238183-41e7-4493-a407-da223302e60f.png"
    },
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
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/4">
                <div className="flex h-20 sm:h-22 md:h-24 items-center justify-center rounded-lg bg-white/10 p-2 sm:p-3 md:p-4 backdrop-blur-sm">
                  <div className="text-center">
                    {brand.logo ? (
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="mx-auto mb-1 sm:mb-2 h-8 sm:h-10 md:h-12 w-auto object-contain"
                      />
                    ) : (
                      <Snowflake className="mx-auto mb-1 sm:mb-2 h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-white" />
                    )}
                    <p className="text-xs sm:text-sm font-mono text-white/80 truncate px-1">{brand.name}</p>
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
