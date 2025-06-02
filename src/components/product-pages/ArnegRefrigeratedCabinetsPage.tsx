
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const refrigeratedCabinetsFrames = [
  {
    id: 1,
    image: "/lovable-uploads/9b00431c-c58d-4449-9d3f-4b1d8975b460.png",
    title: "Multi-Door Refrigerated Display Cabinet",
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
    id: 2,
    video: "https://videos.pexels.com/video-files/6195088/6195088-hd_1920_1080_30fps.mp4",
    title: "Vertical Refrigerated Display",
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
    id: 3,
    video: "https://videos.pexels.com/video-files/3179483/3179483-hd_1920_1080_30fps.mp4",
    title: "Commercial Refrigerator",
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
    video: "https://videos.pexels.com/video-files/3196309/3196309-hd_1920_1080_30fps.mp4",
    title: "Glass Door Refrigerator",
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
    id: 5,
    video: "https://videos.pexels.com/video-files/6195088/6195088-hd_1920_1080_30fps.mp4",
    title: "Curved Glass Display",
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
    id: 6,
    video: "https://videos.pexels.com/video-files/3179483/3179483-hd_1920_1080_30fps.mp4",
    title: "Open Front Display",
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
    video: "https://videos.pexels.com/video-files/3196309/3196309-hd_1920_1080_30fps.mp4",
    title: "Island Refrigerator",
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
    id: 8,
    video: "https://videos.pexels.com/video-files/6195088/6195088-hd_1920_1080_30fps.mp4",
    title: "Upright Showcase",
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
    id: 9,
    video: "https://videos.pexels.com/video-files/3179483/3179483-hd_1920_1080_30fps.mp4",
    title: "Deli Counter Display",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button variant="outline" className="mb-4 bg-white text-primary border-primary hover:bg-primary hover:text-white" asChild>
              <Link to="/products/arneg">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Arneg Products
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4 text-primary">Refrigerated Cabinets</h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our complete range of premium refrigerated display cabinets designed for optimal food preservation and visual appeal. Hover over each product to see them in action.
            </p>
          </div>
          
          <div className="h-[80vh] w-full border border-gray-200 rounded-lg overflow-hidden">
            <DynamicFrameLayout 
              frames={refrigeratedCabinetsFrames} 
              className="w-full h-full" 
              showFrames={true}
              hoverSize={6}
              gapSize={4}
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Hover over each product to see detailed information. Each cabinet is designed with Italian craftsmanship and cutting-edge technology.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
