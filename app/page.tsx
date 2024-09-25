import HeroWithModal from "../components/sections/HeroWithModal";
import MyWork from "../components/sections/MyWork";
import Skills from "../components/sections/Skills";

const Home = () => {
  return (
    <div className=" bg-dark text-light">
      <HeroWithModal />
      <MyWork />
      <Skills />
    </div>
  );
};

export default Home;
