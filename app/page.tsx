import Hero from "../components/sections/Hero";
import MyWork from "../components/sections/MyWork";
import Skills from "../components/sections/Skills";

const Home = () => {
  return (
    <div className=" bg-dark text-light">
      <Hero />
      <MyWork />
      <Skills />
    </div>
  );
};

export default Home;
