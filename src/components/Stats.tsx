import { Building2, Users, Award, Clock } from "lucide-react";

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
    <div className="bg-secondary py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <stat.icon className="mb-4 h-8 w-8 text-primary" />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};