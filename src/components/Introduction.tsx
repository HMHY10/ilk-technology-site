import { Card, CardContent } from "@/components/ui/card";

export const Introduction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 text-center">About ILK Technology</h2>
        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              ILK Technology LTD started with a one-man focus: a Refrigeration Engineer with over 20 years of experience. Since then, we have grown with professionals with a passion for delivering.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Innovation and technology drive our business; we are one of the appointed distribution partners of Arneg within the UK, which drives innovation and enables technology in our products. We offer a wide range of Arneg cabinets that will positively impact our customers. We are proud that ILK Technology has a reputation for not only expertise and technical service but also for being easy to do business with; that is why we are here to give our customers a legendary experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};