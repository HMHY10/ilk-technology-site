import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/88b7bec5-0d88-4282-bb59-323234082e9b.png"
          alt="Commercial Refrigeration"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <img
            src="/lovable-uploads/5f5aacb8-6e91-4b91-9187-4f920bfdb2fa.png"
            alt="ILK Technologies"
            className="mx-auto mb-8 h-24 w-auto"
          />
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