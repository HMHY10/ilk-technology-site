
import { ReactNode } from "react";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
  logoImage: string;
}

export const HeroSection = ({
  backgroundImage,
  title,
  description,
  logoImage
}: HeroSectionProps) => {
  return (
    <section className="relative bg-primary text-white py-24">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
           style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="section-title mb-6">
              {title}
            </h1>
            <p className="text-lg mb-6">
              {description}
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
            <img 
              src={logoImage} 
              alt="Arneg Logo" 
              className="h-24 bg-white/10 p-4 rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
