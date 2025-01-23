import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Introduction = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 text-center">About ILK Technology</h2>
        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <div className={cn("space-y-4 transition-all duration-500", 
              isExpanded ? "max-h-[2000px]" : "max-h-[300px] overflow-hidden"
            )}>
              <p className="text-lg leading-relaxed text-gray-700">
                ILK Technology LTD started with a one-man focus: a Refrigeration Engineer with over 20 years of experience. Since then, we have grown with professionals with a passion for delivering.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Innovation and technology drive our business; we are one of the appointed distribution partners of Arneg within the UK, which drives innovation and enables technology in our products. We offer a wide range of Arneg cabinets that will positively impact our customers. We are proud that ILK Technology has a reputation for not only expertise and technical service but also for being easy to do business with; that is why we are here to give our customers a legendary experience.
              </p>
              
              {/* Additional content */}
              <div className="pt-6 space-y-6">
                <h3 className="text-2xl font-heading font-bold text-primary">Passionate. Creative. Professional.</h3>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  Our team is dedicated to providing the best retail solutions for your supermarket or shop makeover.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  Each team member has received refrigeration training and possesses the experience needed to ensure you select the best products for your needs.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  Our offerings consistently promote a blend of creative style, elegance, and technology. We are proud to partner with Arneg to bring authentic Italian quality to our product range.
                </p>
                
                <h3 className="text-2xl font-heading font-bold text-primary pt-4">Why choose ILK Technology LTD</h3>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  We are a very customer-focused team, and our experience equips us with the knowledge and expertise to ensure our customers are happy with their purchases.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  We have over 20 Years of experience in the refrigeration Industry and can help and support you with technical issues with our products.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  We supply a range of quality products, including Arneg Cabinets, Condensing Units, and an Installation Kit, for your full installation needs.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  Our prices are very competitive within our industry.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mx-auto mt-4 flex items-center justify-center space-x-2 text-primary hover:text-accent transition-colors"
          aria-label={isExpanded ? "Show less" : "Show more"}
        >
          <span className="font-semibold">{isExpanded ? "Show Less" : "Show More"}</span>
          <ChevronDown className={cn(
            "h-6 w-6 transition-transform duration-300",
            isExpanded ? "rotate-180" : ""
          )} />
        </button>
      </div>
    </section>
  );
};