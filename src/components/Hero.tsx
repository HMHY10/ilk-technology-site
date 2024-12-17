import { ThreeSnow } from "@/components/ThreeSnow";
import { BrandCarousel } from "./hero/BrandCarousel";
import { HeroContent } from "./hero/HeroContent";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/69640c38-17ed-4b5c-a463-2ea2eb609240.png"
          alt="Ice Cubes"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <ThreeSnow />
      <HeroContent />
      <BrandCarousel />
    </div>
  );
};