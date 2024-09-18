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
//         className="relative w-5/6 h-44 lg:w-full rounded-lg overflow-hidden"
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

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaGraduationCap } from "react-icons/fa6";
import Image from "next/image";

const Widget = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500 }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {/* slide 1 */}
        <div className="flex-shrink-0 w-full px-2 h-44 md:h-52 relative rounded-lg bg-gradient-to-r from-light_byui to-byui">
          <div className="absolute top-4 z-10 w-1/3 px-2 text-white border-light border-r-2">
            <FaGraduationCap size={80} className="m-auto" />
            <h1 className="text-sm lg:text-lg m-auto text-center">
              Brigham Young University Idaho
            </h1>
          </div>
          <div className="absolute ml-32 md:ml-44 top-4 z-10 w-2/3 p-2 text-white">
            <h2 className="text-xl md:text-3xl mx-auto text-center font-sans">
              BS Software Engineering
            </h2>
            <h1 className="text-2xl md:text-3xl mt-4 mx-auto text-center font-sans text-yellow">
              Graduation Dec 2025
            </h1>
            <div className="flex flex-col items-center space-x-1">
              <p>Full Stack Development</p>
              <p>GPA 3.98</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Additional slides */}

        <div className="flex-shrink-0 w-full px-2 h-44 md:h-52 relative rounded-lg bg-vivacity">
          <div className="absolute top-1 z-10 w-1/3 px-4 text-white border-light border-r-2">
            <Image
              className="object-cover lg:w-36 lg:mx-auto"
              src="/images/vivacity.png"
              width={300}
              height={300}
              priority
              alt="portrait of Keaton Flake"
            />
            <h1 className="text-2xl m-auto text-center">Vivacity Tech</h1>
          </div>
          <div className="absolute ml-32 md:ml-36 lg:ml-48 z-10 w-2/3 p-4 text-white">
            <h2 className="text-xl md:text-2xl lg:text-3xl md:mt-5 lg:mt-3 mx-auto text-center font-serif">
              Software Quality Assurance Intern
            </h2>
            <h1 className="text-2xl md:text-3xl md:mt-2 lg:mt-1 mx-auto text-center font-sans text-yellow">
              April - July 2023
            </h1>
            <h3 className="text-lg lg:text-xl md:mt-3 lg:mt-1 mx-auto text-center font-sans">
              Dream Asset Management Application
            </h3>
          </div>
        </div>
        {/* Next slide */}
        <div className="flex-shrink-0 w-full px-2 h-44 md:h-52 relative rounded-lg bg-gradient-to-r from-lightGray to-softLight hover:from-gray hover:to-blue transition-colors ease-in duration-300">
          <div className="absolute top-10 lg:top-3 z-10 w-24 lg:w-36 p-1 md:p-4 text-white ">
            <h1 className="text-3xl lg:text-4xl font-serif mt-1 md:mt-8 text-yellow m-auto text-center">
              About Me
            </h1>
          </div>
          <div className="absolute ml-24 mt-2 md:ml-40 z-10 w-fit p-1 text-white border-light border-l-2">
            {/* <h2 className="text-xl mx-auto text-center">My Inspiration:</h2> */}
            <h1 className="text-sm md:text-lg mb-2 ml-1 mx-auto text-center font-sans ">
              Books that have made a significant impact
            </h1>
            <div className="flex flex-row space-x-2 overflow-hidden">
              <Image
                className="object-cover h-32"
                src="/images/mindfornumbers.jpg"
                width={100}
                height={100}
                priority
                alt="cover image of book"
              />
              <Image
                className="object-cover h-32"
                src="/images/canthurtme.jpg"
                width={100}
                height={100}
                priority
                alt="cover image of book"
              />
              <Image
                className="object-cover h-32"
                src="/images/gettingreal.png"
                width={100}
                height={100}
                priority
                alt="cover image of book"
              />
              <Image
                className="object-cover h-32"
                src="/images/atomichabits.jpg"
                width={100}
                height={100}
                priority
                alt="cover image of book"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Next slide */}
      </div>
    </div>
  );
};

export default Widget;
