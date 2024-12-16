import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/88b7bec5-0d88-4282-bb59-323234082e9b.png"
          alt="Commercial Refrigeration"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="section-title mb-6 animate-fade-up text-primary">
            COMMERCIAL REFRIGERATION
            <br />
            SOLUTIONS
          </h1>
          <p className="mb-8 animate-fade-up text-lg text-secondary">
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