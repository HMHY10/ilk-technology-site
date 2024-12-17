import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroContent = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 flex min-h-screen items-start justify-start px-8 pt-32 md:px-16">
      <div className="text-left">
        <h1 className="section-title mb-4 animate-fade-up text-primary">
          Hello,
          <br />
          We're ILK Technology Ltd,
          <br />
          <span className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] leading-normal">
            Commercial Refrigeration Supplier and{" "}
            <span className="text-accent">Arneg</span>
            <br />
            Distributor Partner here in th UK.
          </span>
        </h1>
        <Button
          size="lg"
          variant="outline"
          className="animate-fade-up mt-6 text-primary hover:bg-primary hover:text-white"
          onClick={() => navigate("/contact")}
        >
          Let's Talk
        </Button>
      </div>
    </div>
  );
};