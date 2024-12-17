import { ThreeSnow } from "@/components/ThreeSnow";
import { BrandCarousel } from "./hero/BrandCarousel";
import { HeroContent } from "./hero/HeroContent";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/12914c83-2f7b-4e37-ae8d-a028edc73441.png"
          alt="Ice Cubes"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>
      
      <ThreeSnow />
      <HeroContent />
      <BrandCarousel />
    </div>
  );
};