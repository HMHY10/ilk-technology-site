import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/40ea40a6-3369-4a2c-bc4f-4c3fa844d0f4.png"
          alt="Iceberg Refrigeration"
          className="h-full w-full object-cover floating-iceberg"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
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
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};