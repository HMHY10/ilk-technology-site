import { Building2, Users, Award, Clock } from "lucide-react";
import { StatItem } from "./stats/StatItem";

export const Stats = () => {
  const stats = [
    {
      icon: Clock,
      value: "25+",
      label: "Years Experience",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Clients Served",
    },
    {
      icon: Building2,
      value: "5000+",
      label: "Installations",
    },
    {
      icon: Award,
      value: "100%",
      label: "Satisfaction",
    },
  ];

  return (
    <div className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};