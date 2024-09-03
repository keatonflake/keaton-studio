"use client";

import React, { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import Image from "next/image";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  card_description: string;
  images: { url: string }[];
  tags: string[];
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

  // console.log("Projects received:", projects);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {projects.map((project, index) => (
          <div key={project._id} className="embla__carousel_slide">
            <div className="project-card relative border-2 border-light w-60 rounded-lg m-4 overflow-hidden group">
              <div className="relative image-box">
                <Image
                  src={project.images[0].url}
                  width={250}
                  height={500}
                  priority
                  alt={`cover image of ${project.title}`}
                  className="object-cover rounded-lg mx-auto"
                />
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>{" "}
                {/* Dark overlay */}
              </div>

              <div className="details-box bg-gray text-white absolute bottom-0 left-0 w-full h-36 px-2 rounded-b-lg">
                <h1 className="text-xl text-yellow font-bold text-center">
                  {project.title}
                </h1>
                <h2 className="text-sm mb-1 text-softLight text-center">
                  {project.card_description}
                </h2>

                <div className="flex flex-wrap justify-center space-x-1 h-1/2">
                  {project.tags.map((tag) => (
                    <h3
                      key={`${project._id}-${index}`}
                      className="font-sans text-xs text-light bg-lightGray px-2 mt-1 text-center flex items-center justify-center"
                    >
                      {tag}
                    </h3>
                  ))}
                </div>
              </div>

              {/* Light color overlay with button */}
              <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <Link href={`/projects/${project._id}`}>
                  <button className="bg-blue text-white font-bold py-2 px-4 rounded">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarouselClient;
