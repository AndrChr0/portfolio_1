import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { urlFor } from "../main";

// Utility function to conditionally join classNames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// interface Slide {
//   image: string;
//   caption: string;
// }

// interface SlideshowProps {
//   slides: Slide[];
//   interval?: number;
//   className?: string;
// }

export default function ImageSlideshow({
  slides = [
    {
      image: "https://placehold.co/800x600",
      caption: "Beautiful mountain landscape",
    },
    { image: "https://placehold.co/800x600", caption: "Serene beach sunset" },
    { image: "https://placehold.co/800x600", caption: "Vibrant city skyline" },
    { image: "https://placehold.co/800x600", caption: "Peaceful forest trail" },
    { image: "https://placehold.co/800x600", caption: "Majestic waterfall" },
  ],
  interval = 5000,
  className,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleManualNavigation = (callback) => {
    // Reset the timer when manually navigating
    setIsAutoPlaying(false);
    callback();
    // Resume auto-playing after a short delay
    setTimeout(() => setIsAutoPlaying(true), 100);
  };

  useEffect(() => {
    let timer = null;

    if (isAutoPlaying) {
      timer = window.setInterval(goToNextSlide, interval);
    }

    return () => {
      if (timer !== null) window.clearInterval(timer);
    };
  }, [currentIndex, interval, isAutoPlaying]);

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-lg", className)}
    >
      {/* Slideshow container */}
      <div className='relative aspect-video w-full'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
          >
            <img
              // urlFor(projectData.processSection[1].stepImage.asset._ref)
              src={urlFor(slide.image.asset._ref) || "/placeholder.svg"}
              alt={slide.slideImageAltText}
              className='h-full w-full object-cover'
            />
            <div className='absolute bottom-4 left-4 max-w-[80%] rounded bg-black/50 px-3 py-2 text-white backdrop-blur-sm'>
              {slide.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => handleManualNavigation(goToPrevSlide)}
        className='absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50'
        aria-label='Previous slide'
      >
        <ChevronLeft className='h-6 w-6' />
      </button>
      <button
        onClick={() => handleManualNavigation(goToNextSlide)}
        className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50'
        aria-label='Next slide'
      >
        <ChevronRight className='h-6 w-6' />
      </button>

      {/* Slide indicators */}
      <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
            className={cn(
              "h-1.5 w-6 rounded-full transition-all",
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
