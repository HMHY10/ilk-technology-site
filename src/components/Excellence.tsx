
import { Award, Shield, Zap } from "lucide-react";

export const Excellence = () => {
  const capabilities = [
    {
      icon: Award,
      title: "ISO Certified",
      description: "Internationally recognized quality management standards",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Rigorous safety protocols and compliance measures",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Highly trained and certified technicians",
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Round-the-clock emergency service availability",
    },
  ];

  return (
    <div id="excellence" className="bg-white py-16">
      <div className="container">
        <h2 className="section-title mb-12 text-center text-primary">PROVEN EXCELLENCE</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <div key={index} className="service-card">
              <item.icon className="mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 font-mono text-xl font-bold text-primary">{item.title}</h3>
              <p className="text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
