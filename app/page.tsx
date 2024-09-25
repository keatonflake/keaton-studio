import HeroWithModal from "../components/sections/HeroWithModal";
import MyWork from "../components/sections/MyWork";
import Skills from "../components/sections/Skills";
// import ResumeAbout from "../components/sections/(resume-about)/ResumeAbout";
// import { SendMessage } from "../components/(sendMessage)/SendMessage";

// import AboutButtonClient from "@/components/sections/(about)/AboutButtonClient";

const Home = () => {
  return (
    <div className=" bg-dark text-light">
      <HeroWithModal />
      <MyWork />
      <Skills />
      {/* <ResumeAbout /> */}
      {/* <SendMessage /> */}

      {/* <AboutButtonClient /> */}
    </div>
  );
};

export default Home;
