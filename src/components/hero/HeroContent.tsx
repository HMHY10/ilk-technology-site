
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";

export const HeroContent = () => {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-10">
      <div className="text-left -mt-32">
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
        <div className="animate-fade-up">
          <ServiceRequestForm buttonText="Let's Talk" source="Hero Section" />
        </div>
      </div>
    </div>
  );
};
