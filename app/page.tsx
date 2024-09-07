import Hero from "../components/sections/Hero";
import MyWork from "../components/sections/MyWork";
import Skills from "../components/sections/Skills";
import ResumeAbout from "../components/sections/(resume-about)/ResumeAbout";

const Home = () => {
  return (
    <div className=" bg-dark text-light">
      <Hero />
      <MyWork />
      <Skills />
      {/* <ResumeAbout /> */}
    </div>
  );
};

export default Home;
