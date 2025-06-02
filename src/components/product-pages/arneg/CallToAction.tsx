
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
}

export const CallToAction = ({
  title,
  description,
  buttonText
}: CallToActionProps) => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title mb-6">{title}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <ServiceRequestForm buttonText={buttonText} />
      </div>
    </section>
  );
};
