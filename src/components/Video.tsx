
import { Card } from "@/components/ui/card";

export const Video = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 text-center">Arneg in Action</h2>
        <Card className="overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F170766102980156%2Fvideos%2F3639210539470166%2F&show_text=false&width=560&t=0"
              title="Arneg in Action"
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
