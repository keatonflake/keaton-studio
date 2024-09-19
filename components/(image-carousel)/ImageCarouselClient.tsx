// "use client";

// import React, { useEffect, useRef } from "react";
// import EmblaCarousel from "embla-carousel";
// import Image from "next/image";

// interface Project {
//   _id: string;
//   title: string;
//   card_description: string;
//   images: { url: string }[];
//   tags: string[];
// }

// interface ProjectCarouselClientProps {
//   projects: Project[];
// }

// const ProjectCarouselClient: React.FC<ProjectCarouselClientProps> = ({
//   projects,
// }) => {
//   const emblaRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (emblaRef.current) {
//       const embla = EmblaCarousel(emblaRef.current);
//       console.log("Embla Slide Count:", embla.slideNodes().length);

//       return () => embla.destroy();
//     }
//   }, []);

//   return (
//     <div className="overflow-hidden" ref={emblaRef}>
//       <div className="flex mx-auto">
//         {projects.map((project, index) => (
//           <div key={project._id} className="flex-shrink-0 w-auto mr-4">
//             <div className="project-card relative border-2 border-light rounded-lg m-4 overflow-hidden group">
//               <div className="relative image-box">
//                 <Image
//                   src={project.images[0].url}
//                   width={250}
//                   height={500}
//                   priority
//                   alt={`cover image of ${project.title}`}
//                   className="object-cover rounded-lg h-96"
//                 />
//                 <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
//                 {/* Dark overlay */}
//               </div>

//               <div className="details-box bg-gray text-white absolute bottom-0 left-0 w-full h-1/2 px-2 rounded-b-lg">
//                 <h1 className="text-lg text-light font-bold text-center">
//                   {project.title}
//                 </h1>
//                 <h2 className="text-sm mb-3 text-softLight text-center">
//                   {project.card_description}
//                 </h2>

//                 <div className="flex flex-wrap justify-center items-center space-x-1 space-y-1 h-auto">
//                   {project.tags.map((tag, index) => (
//                     <p
//                       key={`${project._id}-${index}`}
//                       className="flex items-center justify-center font-sans text-sm text-center text-light bg-lightGray h-8 p-2 rounded-full"
//                     >
//                       {tag}
//                     </p>
//                   ))}
//                 </div>
//               </div>

//               {/* Light color overlay with button */}
//               <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectCarouselClient;
