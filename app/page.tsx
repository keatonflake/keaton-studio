import HeroWithModal from "../components/sections/HeroWithModal";
import MyWork from "../components/sections/MyWork";
import Skills from "../components/sections/Skills";
import AboutDetails from "@/components/sections/(about)/AboutSSR";

const Home = () => {
  return (
    <div className=" bg-dark text-light">
      <HeroWithModal />
      <MyWork />
      <Skills />
      <AboutDetails />
    </div>
  );
};

export default Home;
