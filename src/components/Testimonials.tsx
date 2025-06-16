
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MessageSquare } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "ILK Technology has transformed our business with their exceptional refrigeration solutions. Their expertise and professionalism are unmatched.",
      author: "John Smith",
      company: "Fresh Foods Market",
    },
    {
      text: "Outstanding service and support. Their team's quick response time and technical knowledge have saved us countless times.",
      author: "Sarah Johnson",
      company: "Premier Restaurants",
    },
    {
      text: "The most reliable partner for all our commercial refrigeration needs. Their preventive maintenance program has significantly reduced our downtime.",
      author: "Michael Chen",
      company: "Global Distribution Co.",
    },
  ];

  return (
    <div className="bg-primary py-16">
      <div className="container">
        <h2 className="section-title mb-12 text-center text-white">
          CUSTOMER TESTIMONIALS
        </h2>
        <Carousel className="mx-auto max-w-4xl">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center p-6 text-center">
                  <MessageSquare className="mb-6 h-12 w-12 text-accent" />
                  <p className="mb-6 text-lg text-white">{testimonial.text}</p>
                  <div className="text-muted">
                    <p className="font-bold">{testimonial.author}</p>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-white text-white hover:bg-white hover:text-primary" />
          <CarouselNext className="border-white text-white hover:bg-white hover:text-primary" />
        </Carousel>
      </div>
    </div>
  );
};
