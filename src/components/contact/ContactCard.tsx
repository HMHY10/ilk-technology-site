import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  details: string;
  action: string;
}

export const ContactCard = ({ icon: Icon, title, details, action }: ContactCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-lg border border-muted p-6 text-center">
      <Icon className="mb-4 h-12 w-12 text-accent" />
      <h3 className="mb-2 font-mono text-xl font-bold text-primary">{title}</h3>
      <p className="mb-2 text-lg text-primary">{details}</p>
      <p className="text-secondary">{action}</p>
    </div>
  );
};