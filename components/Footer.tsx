const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-blue text-light mx-auto flex items-center justify-center p-4">
      &copy; {new Date().getFullYear()}{" "}
      <a className="ml-1" href="/">
        Keaton Flake
      </a>
    </div>
  );
};

export default Footer;
