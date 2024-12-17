import { Button } from "@/components/ui/button";

export const HeroContent = () => {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-20">
      <div className="text-center">
        <h1 className="section-title mb-6 animate-fade-up">
          <span className="text-blue-500">Hello,</span>
          <br />
          We're ILK Technology,
          <br />
          Commercial Refrigeration Supplier and{" "}
          <span className="text-accent">Arneg</span>
          <br />
          Distribution Partner here in the UK
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
  );
};