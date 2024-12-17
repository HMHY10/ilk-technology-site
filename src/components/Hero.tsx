import { Button } from "@/components/ui/button";
import { ThreeSnow } from "@/components/ThreeSnow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Snowflake } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";

export const Hero = () => {
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
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/40ea40a6-3369-4a2c-bc4f-4c3fa844d0f4.png"
          alt="Iceberg Refrigeration"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <ThreeSnow />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-20">
        <div className="text-center">
          <h1 className="section-title mb-6 animate-fade-up text-white">
            COMMERCIAL REFRIGERATION
            <br />
            SOLUTIONS
          </h1>
          <p className="mb-8 animate-fade-up text-lg text-white">
            Industry-leading cooling solutions for your business
          </p>
          <Button
            size="lg"
            className="animate-fade-up bg-accent text-white hover:bg-accent/90"
          >
            Enquire Now
          </Button>
        </div>
      </div>

      {/* Brand Carousel */}
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
    </div>
  );
};
