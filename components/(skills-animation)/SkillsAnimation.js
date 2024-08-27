"use client";

import { useEffect, useRef } from "react";
import styles from "./skills-animation.module.css";
import "../../app/globals.css";
import gsap from "gsap";
import SplitText from "split-text-js"; // Import SplitText from split-text-js

const SkillsAnimation = () => {
  const textWrapperRef = useRef(null);

  useEffect(() => {
    const animateTitles = () => {
      const tl = gsap.timeline();

      const titles = gsap.utils.toArray(
        textWrapperRef.current.querySelectorAll("p")
      );

      titles.forEach((title) => {
        const splitTitle = new SplitText(title);

        tl.from(
          splitTitle.chars,
          {
            opacity: 0,
            y: 50,
            rotateX: -90,
            stagger: 0.02,
          },
          "<"
        ).to(
          splitTitle.chars,
          {
            opacity: 0,
            y: -50,
            rotateX: 90,
            stagger: 0.02,
          },
          "<1"
        );
      });

      // Restart the animation when it completes
      tl.eventCallback("onComplete", animateTitles);
    };

    animateTitles();
  }, []);

  return (
    <div className={styles.text_wrapper} ref={textWrapperRef}>
      <p>Software Engineer</p>
      <p>Frontend/Backend</p>
      <p>Collaborator</p>
      <p>Artist</p>
    </div>
  );
};

export default SkillsAnimation;
