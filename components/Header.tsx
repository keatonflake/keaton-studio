const Header = () => {
  return (
    <div className=" bg-blue text-light h-16 flex justify-center items-center space-x-6 md:space-x-10">
      <a href="/" className="hover:border-b-4 border-yellow text-lg">
        <h2>About Me</h2>
      </a>

      <a href="/" className="hover:border-b-4 border-yellow text-lg">
        <h2>Projects</h2>
      </a>

      <a href="/" className="hover:border-b-4 border-yellow text-lg">
        <h2>Resume</h2>
      </a>

      <a href="/" className="hover:border-b-4 border-yellow text-lg">
        <h2>Contact Me</h2>
      </a>
    </div>
  );
};

export default Header;
