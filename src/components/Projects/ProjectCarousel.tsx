"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const displayImages = images.slice(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    if (displayImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [displayImages.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  if (!displayImages || displayImages.length === 0) return null;

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden group">
      {/* Images Container */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {displayImages.map((img, idx) => (
          <div key={idx} className="w-full h-full shrink-0 relative">
            <Image
              src={img}
              alt={`${title} screenshot ${idx + 1}`}
              fill
              className="object-contain"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows (visible on hover) */}
      {displayImages.length > 1 && (
         <>
            <button 
               onClick={handlePrevious}
               className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-[var(--color-accent)] text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-10"
               aria-label="Previous slide"
            >
               <ChevronLeft size={24} />
            </button>
            
            <button 
               onClick={handleNext}
               className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-[var(--color-accent)] text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-10"
               aria-label="Next slide"
            >
               <ChevronRight size={24} />
            </button>
         </>
      )}


    </div>
  );
}
