import React, { RefObject } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroBackground from "./HeroBackground";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroButton from "./HeroButton";

interface Props {
  aboutRef: RefObject<HTMLElement>;
  skillsRef: RefObject<HTMLElement>;
  workExperienceRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
}

function Hero({ aboutRef, skillsRef, workExperienceRef, projectsRef }: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, my name's Hieu", "a.k.a Dan Halis", "@danhalis"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="
      h-[800px]
      flex flex-col
      relative
      items-center justify-center
      overflow-hidden"
    >
      <HeroBackground />

      <motion.div
        className="absolute"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
        }}
      >
        <div
          className="flex flex-col
          items-center justify-center
          space-y-8"
        >
          <Image
            className="rounded-full object-cover shadow-[#333333] shadow-xl"
            src="https://raw.githubusercontent.com/danhalis/portfolio/master/public/profile-photo.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
          />
          <h2 className="hero-title">Software Developer</h2>
          <h1 className="h-20 text-center text-3xl lg:text-5xl font-semibold px-10">
            <span className="">{text}</span>
            <Cursor />
          </h1>
          <div className="flex">
            <HeroButton href="/portfolio#about" sectionRef={aboutRef}>About</HeroButton>
            <HeroButton href="/portfolio#skills" sectionRef={skillsRef}>Skills</HeroButton>
            <HeroButton href="/portfolio#experience" sectionRef={workExperienceRef}>Experience</HeroButton>
            <HeroButton href="/portfolio#projects" sectionRef={projectsRef}>Projects</HeroButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
