import { Button } from "@/components/ui/button";

export const HeroContent = () => {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-20">
      <div className="text-left">
        <h1 className="section-title mb-6 animate-fade-up">
          <span className="text-[#221F26]">Hello,</span>
          <br />
          We're ILK Technology,
          <br />
          Commercial Refrigeration Supplier and{" "}
          <span className="text-[#ea384c]">Arneg</span>
          <br />
          Distribution Partner here in the UK
        </h1>
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