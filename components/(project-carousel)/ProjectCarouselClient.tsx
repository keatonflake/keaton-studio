"use client";

import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  images: { url: string }[];
}

interface ProjectCarouselClientProps {
  projects: Project[];
}

const ProjectCarouselClient: React.FC<ProjectCarouselClientProps> = ({
  projects,
}) => {
  const emblaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (emblaRef.current) {
      const embla = EmblaCarousel(emblaRef.current);
      console.log("Embla Slide Count:", embla.slideNodes().length);

      return () => embla.destroy();
    }
  }, []);

  console.log("Projects received:", projects);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {projects.map((project, index) => (
          <div key={project._id} className="embla__carousel_slide">
            <div className="project-card relative border-2 border-light w-60 rounded-lg m-4">
              <div className="image-box">
                <Image
                  src={project.images[0].url}
                  width={250}
                  height={500}
                  priority
                  alt={`cover image of ${project.title}`}
                  className="object-cover rounded-lg mx-auto"
                />
              </div>
              <div className="details-box bg-gray text-white absolute bottom-0 left-0 w-full p-4 rounded-b-lg">
                <h1 className="text-md font-bold">{project.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarouselClient;
