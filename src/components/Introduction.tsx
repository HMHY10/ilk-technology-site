import { Card, CardContent } from "@/components/ui/card";

export const Introduction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 text-center">About ILK Technologies</h2>
        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              ILK Technologies is a leading provider of innovative refrigeration solutions, partnering with ARNEG to deliver cutting-edge technology and superior service to our clients. With years of expertise in commercial refrigeration, we're committed to providing energy-efficient, sustainable solutions that meet the evolving needs of modern businesses.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};