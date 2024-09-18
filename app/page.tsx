import Hero from "../components/sections/Hero";
import MyWork from "../components/sections/MyWork";
import Skills from "../components/sections/Skills";
// import ResumeAbout from "../components/sections/(resume-about)/ResumeAbout";
import { SendMessage } from "../components/(sendMessage)/SendMessage";

const Home = () => {
  return (
    <div className=" bg-dark text-light">
      <Hero />
      <MyWork />
      <Skills />
      {/* <ResumeAbout /> */}
      {/* <SendMessage /> */}
    </div>
  );
};

export default Home;
