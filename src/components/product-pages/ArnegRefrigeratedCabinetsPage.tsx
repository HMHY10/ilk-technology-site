
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const refrigeratedCabinetsFrames = [
  {
    id: 1,
    video: "https://videos.pexels.com/video-files/3196116/3196116-hd_1920_1080_30fps.mp4",
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
    video: "https://videos.pexels.com/video-files/3196309/3196309-hd_1920_1080_30fps.mp4",
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
    video: "https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4",
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
    video: "https://videos.pexels.com/video-files/3179524/3179524-hd_1920_1080_30fps.mp4",
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
    video: "https://videos.pexels.com/video-files/5750039/5750039-hd_1920_1080_30fps.mp4",
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
    video: "https://videos.pexels.com/video-files/6195088/6195088-hd_1920_1080_30fps.mp4",
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
    video: "https://videos.pexels.com/video-files/3130389/3130389-hd_1920_1080_30fps.mp4",
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
    video: "https://videos.pexels.com/video-files/4226748/4226748-hd_1920_1080_30fps.mp4",
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
    id: 10,
    video: "https://videos.pexels.com/video-files/4662009/4662009-hd_1920_1080_30fps.mp4",
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
    video: "https://videos.pexels.com/video-files/4663208/4663208-hd_1920_1080_30fps.mp4",
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
    video: "https://videos.pexels.com/video-files/5748870/5748870-hd_1920_1080_30fps.mp4",
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
    video: "https://videos.pexels.com/video-files/5750262/5750262-hd_1920_1080_30fps.mp4",
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
              Explore our complete range of premium refrigerated display cabinets designed for optimal food preservation and visual appeal.
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
              Hover over each product to see it in action. Each cabinet is designed with Italian craftsmanship and cutting-edge technology.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
