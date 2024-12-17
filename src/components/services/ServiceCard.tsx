import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white">
      <Icon className="mb-4 h-12 w-12 text-accent" />
      <h3 className="mb-2 font-mono text-xl font-bold text-primary">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );
};