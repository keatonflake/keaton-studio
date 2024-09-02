import ProjectCarousel from "../(project-carousel)/ProjectCarouselSSR";

const Projects = () => {
  return (
    <div className=" mt-10 w-full h-fit lg:max-w-7xl rounded-lg mx-auto">
      <h1 className="text-4xl text-center font-serif py-4 border-b-2 border-light">
        My Work
      </h1>

      <ProjectCarousel />
    </div>
  );
};

export default Projects;
