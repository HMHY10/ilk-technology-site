import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactCard } from "./contact/ContactCard";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "0203 051 0367",
      action: "24/7 Support Available",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@ilktechnology.com",
      action: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "2 Poplar Way",
      action: "Wembley, HA9 7RE",
    },
  ];

  return (
    <div id="contact" className="bg-white py-16">
      <div className="container">
        <h2 className="section-title mb-12 text-center text-primary">CONTACT US</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
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