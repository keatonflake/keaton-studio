// "use client";
// // components/Widget.tsx
// import { useEffect, useRef, useState } from "react";
// // import Image from 'next/image';

// const images: string[] = [
//   "https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg",
//   "https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg",
//   "https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg",
//   "https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg",
//   "https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg",
//   "https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg",
//   "https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg",
// ];

// const Widget = () => {
//   const widgetRef = useRef<HTMLDivElement>(null);
//   const [displayIndex, setDisplayIndex] = useState<number>(0);

//   useEffect(() => {
//     if (widgetRef.current) {
//       const widget = widgetRef.current;
//       widget.innerHTML = "";

//       images.forEach((imageSrc, index) => {
//         const displayBox = document.createElement("div");
//         const image = document.createElement("img");

//         image.src = imageSrc;
//         image.classList.add("object-cover");

//         displayBox.appendChild(image);
//         widget.appendChild(displayBox);

//         if (index !== displayIndex) {
//           displayBox.classList.add("hidden");
//         }
//       });
//     }
//   }, [displayIndex]);

//   return (
//     <div className="flex justify-center items-center">
//       <div
//         ref={widgetRef}
//         className="relative w-5/6 h-44 lg:w-full lg:h-52 rounded-lg overflow-hidden"
//       >
//         <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 bg-white bg-opacity-50">
//           <div className="flex justify-center items-center">
//             <span className="text-white">o</span>
//           </div>
//           <div className="flex justify-center items-center">
//             <span className="text-white">o</span>
//           </div>
//           <h1 className="col-span-2 row-start-1 text-white text-center mt-1">
//             Compare Motorcycles
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Widget;

"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Widget = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-shrink-0 w-full h-44 md:h-52 relative rounded-lg overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg"
            width={700}
            height={400}
            priority
            alt="Compare Motorcycles Poster"
          />
          <h1 className="absolute top-2 left-2 right-2 z-10 text-2xl md:text-3xl text-white text-center">
            Projects
          </h1>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Additional slides */}

        <div className="flex-shrink-0 w-full h-44 md:h-52 relative rounded-lg overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg"
            width={700}
            height={400}
            priority
            alt="Compare Motorcycles Poster"
          />
          <h1 className="absolute top-2 left-2 right-2 z-10 text-2xl md:text-3xl text-white text-center">
            Projects
          </h1>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="flex-shrink-0 w-full h-44 md:h-52 relative rounded-lg overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg"
            width={700}
            height={400}
            priority
            alt="Compare Motorcycles Poster"
          />
          <h1 className="absolute top-2 left-2 right-2 z-10 text-2xl md:text-3xl text-white text-center">
            Projects
          </h1>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="flex-shrink-0 w-full h-44 md:h-52 relative rounded-lg overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="https://compare-motorcycles.onrender.com/assets/motorcycle_mobile-B1xuxxSp.jpg"
            width={700}
            height={400}
            priority
            alt="Compare Motorcycles Poster"
          />
          <h1 className="absolute top-2 left-2 right-2 z-10 text-2xl md:text-3xl text-white text-center">
            Projects
          </h1>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
