import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const refrigeratedCabinetsFrames = [
  // All 10 unique cabinet images
  {
    id: 1,
    image: "/lovable-uploads/40ea40a6-3369-4a2c-bc4f-4c3fa844d0f4.png",
    title: "Multi-Deck Display Cabinet",
    mediaType: "image" as const,
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 2,
    video: "https://videos.pexels.com/video-files/3196309/3196309-hd_1920_1080_30fps.mp4",
    title: "Refrigeration System Demo",
    mediaType: "video" as const,
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 3,
    image: "/lovable-uploads/5f5aacb8-6e91-4b91-9187-4f920bfdb2fa.png",
    title: "Premium Serve-Over Counter",
    mediaType: "image" as const,
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 4,
    image: "/lovable-uploads/69640c38-17ed-4b5c-a463-2ea2eb609240.png",
    title: "Frozen Food Island Cabinet",
    mediaType: "image" as const,
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 5,
    image: "/lovable-uploads/76b23ff7-efa3-486a-9543-807697ddd20b.png",
    title: "Vertical Display Cabinet",
    mediaType: "image" as const,
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 6,
    video: "https://videos.pexels.com/video-files/6195088/6195088-hd_1920_1080_30fps.mp4",
    title: "Advanced Cooling Technology",
    mediaType: "video" as const,
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 7,
    image: "/lovable-uploads/88b7bec5-0d88-4282-bb59-323234082e9b.png",
    title: "Semi-Vertical Refrigerated Unit",
    mediaType: "image" as const,
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 8,
    image: "/lovable-uploads/dfa13fcd-f23a-4e21-a7ff-3de03dce77ae.png",
    title: "Commercial Deli Counter",
    mediaType: "image" as const,
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 9,
    video: "https://videos.pexels.com/video-files/3179483/3179483-hd_1920_1080_30fps.mp4",
    title: "Energy Efficient Systems",
    mediaType: "video" as const,
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 10,
    image: "/lovable-uploads/7c833cb1-70df-440b-9311-9911c75d6cde.png",
    title: "Specialty Display Cabinet",
    mediaType: "image" as const,
    defaultPos: { x: 0, y: 12, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 11,
    image: "/lovable-uploads/93685d2f-0194-410b-8685-4e05f4c9cb43.png",
    title: "Promotional Island Cabinet",
    mediaType: "image" as const,
    defaultPos: { x: 4, y: 12, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 12,
    image: "/lovable-uploads/d47e8a46-3c00-48b8-8581-29ced4362b4c.png",
    title: "Combined Island System",
    mediaType: "image" as const,
    defaultPos: { x: 8, y: 12, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 13,
    image: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    title: "Premium Refrigeration Suite",
    mediaType: "image" as const,
    defaultPos: { x: 4, y: 16, w: 4, h: 4 },
    corner: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeHorizontal: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    edgeVertical: "/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png",
    mediaSize: 1,
    borderThickness: 8,
    borderSize: 90,
    isHovered: false,
  },
];

export const ArnegRefrigeratedCabinetsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button variant="outline" className="mb-4 bg-white text-zinc-900 hover:bg-gray-100" asChild>
              <Link to="/products/arneg">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Arneg Products
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4 text-white">Refrigerated Cabinets</h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore our complete range of premium refrigerated display cabinets designed for optimal food preservation and visual appeal. Hover over each product to see detailed information.
            </p>
          </div>
          
          <div className="h-[80vh] w-full">
            <DynamicFrameLayout 
              frames={refrigeratedCabinetsFrames} 
              className="w-full h-full" 
              showFrames={false}
              hoverSize={8}
              gapSize={6}
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Hover over each product to see detailed information. Each cabinet is designed with Italian craftsmanship and cutting-edge technology.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
