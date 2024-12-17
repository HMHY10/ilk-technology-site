import { ThreeSnow } from "@/components/ThreeSnow";
import { BrandCarousel } from "./hero/BrandCarousel";
import { HeroContent } from "./hero/HeroContent";

export const Hero = () => {
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
      <HeroContent />
      <BrandCarousel />
    </div>
  );
};