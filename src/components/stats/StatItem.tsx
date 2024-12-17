import { LucideIcon } from "lucide-react";

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const StatItem = ({ icon: Icon, value, label }: StatItemProps) => {
  return (
    <div className="stat-item">
      <Icon className="mb-4 h-8 w-8 text-accent" />
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
};