import { Card } from "@/components/ui/card";

export const Video = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 text-center">Arneg in Action</h2>
        <Card className="overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/rWCD6LOn8_E"
              title="Osaka 3 LX ECO RING"
              width="100%"
              height="100%"
              style={{ border: 'none', overflow: 'hidden' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </Card>
      </div>
    </section>
  );
};