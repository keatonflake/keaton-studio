"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const AboutButtonClient = () => {
  const [showComponent, setShowComponent] = useState(false);
  const AboutMeSSR = dynamic(() => import("./AboutMeSSR"), { ssr: false });

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <button onClick={toggleComponent}>About Me</button>
      {showComponent && <AboutMeSSR />}
    </div>
  );
};

export default AboutButtonClient;
