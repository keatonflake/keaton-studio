"use client";

import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import Image from "next/image";

interface ImageData {
  url: string;
}

const ImageCarouselClient: React.FC<{ images: ImageData[] }> = ({ images }) => {
  const emblaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (emblaRef.current) {
      const embla = EmblaCarousel(emblaRef.current);

      return () => embla.destroy();
    }
  }, []);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex mx-auto">
        {images.map((image, index) => (
          <div className="flex-shrink-0 w-auto mr-4" key={index}>
            <div className="project-card relative border-2 border-light rounded-lg m-4 overflow-hidden group">
              <div className="relative image-box">
                <Image
                  src={image.url}
                  width={250}
                  height={500}
                  priority
                  alt={`Personal photo ${index + 1}`}
                  className="object-cover rounded-lg h-96"
                />
                {/* <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> */}
                {/* Dark overlay */}
              </div>

              {/* Optional overlay for hover effect */}
              {/* <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarouselClient;
