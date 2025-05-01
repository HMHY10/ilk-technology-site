
interface AuthenticitySectionProps {
  title: string;
  paragraphs: string[];
}

export const AuthenticitySection = ({
  title,
  paragraphs
}: AuthenticitySectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-6 text-center">{title}</h2>
        <div className="max-w-4xl mx-auto">
          {paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className={`text-lg mb-6 ${index === paragraphs.length - 1 ? 'font-semibold text-center' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
