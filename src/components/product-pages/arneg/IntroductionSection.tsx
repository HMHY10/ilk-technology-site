
interface IntroductionSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export const IntroductionSection = ({
  title,
  subtitle,
  description
}: IntroductionSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-6 text-center">{title}</h2>
        <h3 className="text-xl md:text-2xl text-center text-primary mb-8 font-heading">
          {subtitle}
        </h3>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
