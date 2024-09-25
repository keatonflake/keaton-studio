// "use client";

// import Image from "next/image";
// import EmblaCarousel from "embla-carousel";
// import React, { useRef, useEffect } from "react";

// interface Data {
//   summary: string;
//   images: string[];
// }

// interface AboutMeProps {
//   data: Data[];
// }

// const AboutMeClient: React.FC<AboutMeProps> = ({ data }) => {
//   const emblaRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (emblaRef.current) {
//       const embla = EmblaCarousel(emblaRef.current);
//       console.log("Embla Slide Count:", embla.slideNodes().length);
//       return () => embla.destroy();
//     }
//   }, []);

//   return (
//     <div className="mt-10 w-full lg:max-w-7xl mx-auto">
//       <p>{data[0].summary}</p>
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex mx-auto">
//           {data[0].images.map((image: string, index: number) => (
//             <div key={index} className="flex-shrink-0 w-auto mr-4">
//               <div className="project-card relative border-2 border-light rounded-lg m-4 overflow-hidden group">
//                 <div className="relative image-box">
//                   <Image
//                     src={image}
//                     width={250}
//                     height={500}
//                     priority
//                     alt={`cover image of ${data[0].summary}`}
//                     className="object-cover rounded-lg mx-auto"
//                   />
//                   <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
//                   {/* Dark overlay */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMeClient;
