import { Button } from "@/components/ui/button";

export const HeroContent = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-20">
      <div className="text-left">
        <h1 className="section-title mb-6 animate-fade-up">
          <span className="text-primary">Hello,</span>
          <br />
          <span className="text-white">We're ILK Technology,</span>
          <br />
          <span className="text-white">Commercial Refrigeration Supplier and{" "}</span>
          <span className="text-[#ea384c]">Arneg</span>
          <br />
          <span className="text-white">Distribution Partner here in the UK</span>
        </h1>
        <Button
          size="lg"
          className="animate-fade-up bg-accent text-white hover:bg-accent/90"
          onClick={scrollToContact}
        >
          Let's Talk
        </Button>
      </div>
    </div>
  );
};