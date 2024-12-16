import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "24/7 Support Available",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@ilktechnologies.com",
      action: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Business Street",
      action: "Los Angeles, CA 90001",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container">
        <h2 className="section-title mb-12 text-center text-primary">CONTACT US</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border border-muted p-6 text-center"
            >
              <item.icon className="mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 font-mono text-xl font-bold text-primary">{item.title}</h3>
              <p className="mb-2 text-lg text-primary">{item.details}</p>
              <p className="text-secondary">{item.action}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-accent text-white hover:bg-accent/90">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};