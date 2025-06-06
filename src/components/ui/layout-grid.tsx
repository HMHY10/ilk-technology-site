"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrochureDownloadForm } from "@/components/forms/BrochureDownloadForm";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  productName?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const [showBrochureForm, setShowBrochureForm] = useState(false);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  const handleDownloadBrochure = () => {
    setShowBrochureForm(true);
  };

  return (
    <div className="w-full h-full p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-6 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer min-h-[280px] aspect-[4/5]",
              selected?.id === card.id
                ? "rounded-lg absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full shadow-lg"
                : "bg-white rounded-xl h-full w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && (
              <SelectedCard 
                selected={selected} 
                onDownloadBrochure={handleDownloadBrochure}
              />
            )}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
      
      <BrochureDownloadForm
        isOpen={showBrochureForm}
        onClose={() => setShowBrochureForm(false)}
        productName={selected?.productName || "Product"}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <div className="relative h-full w-full">
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        loading="lazy"
        className={cn(
          "object-contain object-center absolute inset-0 h-full w-full transition duration-200 p-2"
        )}
        alt="thumbnail"
      />
      {card.productName && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2">
          <h3 className="text-red-600 font-heading font-bold text-sm md:text-base text-center leading-tight">
            {card.productName}
          </h3>
        </div>
      )}
    </div>
  );
};

const SelectedCard = ({ 
  selected, 
  onDownloadBrochure 
}: { 
  selected: Card | null;
  onDownloadBrochure: () => void;
}) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
        <div className="mt-6">
          <Button 
            onClick={onDownloadBrochure}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 text-lg"
          >
            Download Brochure
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
