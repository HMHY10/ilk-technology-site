import { Card } from "@/components/ui/card";

export const Video = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 text-center">Arneg in Action</h2>
        <Card className="overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2Fww-IjFoZwk%2F"
              width="100%"
              height="100%"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </Card>
      </div>
    </section>
  );
};