
import { Snowflake, Factory, Settings, PhoneCall } from "lucide-react";
import { ServiceCard } from "./services/ServiceCard";

export const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Commercial Cooling",
      description: "State-of-the-art refrigeration systems for businesses",
    },
    {
      icon: Factory,
      title: "Industrial Solutions",
      description: "Large-scale industrial refrigeration installations",
    },
    {
      icon: Settings,
      title: "Installation",
      description: "Installation services",
    },
    {
      icon: PhoneCall,
      title: "Support",
      description: "technical@ilktechnology.com",
    },
  ];

  return (
    <div id="services" className="container py-16">
      <h2 className="section-title mb-12 text-center text-primary">OUR SERVICES</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};
