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
    { name: "CoolTech Solutions" },
    { name: "Arctic Systems" },
    { name: "Frost Industries" },
    { name: "Polar Refrigeration" },
    { name: "IceBerg Cooling" },
    { name: "North Star Systems" },
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
                    <Snowflake className="mx-auto mb-2 h-6 w-6 text-white" />
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