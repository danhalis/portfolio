"use client";

import About from "@/components/about/About";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

// (https://github.com/vercel/next.js/discussions/14469#discussioncomment-29422)
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { useEffect, useRef, RefObject, useState } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const workExperienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const refs: { [id: string] : RefObject<HTMLElement>; } = {
    hero: heroRef,
    about: aboutRef,
    skills: skillsRef,
    experience: workExperienceRef,
    projects: projectsRef
  }

  const [path] = useState(window.location.href);

  useEffect(() => {
    console.log(path)
    const currentUrl = path;
    const splitedUrl = currentUrl.split("/#");
    const elementId = splitedUrl[splitedUrl.length - 1];
    refs[elementId]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [path]);

  return (
    <div
      className="
      h-screen z-0
      text-white
      lg:snap-y lg:snap-mandatory
      overflow-y-scroll
      scrollbar scrollbar-track-gray-400/20
      scrollbar-thumb-cyan-700
      scroll-smooth
      "
    >
      <Header />
      <section className="lg:h-1 lg:snap-center" />
      <section id="hero" className="lg:snap-center" ref={heroRef}>
        <Hero
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          workExperienceRef={workExperienceRef}
          projectsRef={projectsRef}
        />
      </section>

      <section id="about" className="lg:snap-center" ref={aboutRef}>
        <About />
      </section>

      <section
        id="skills"
        className="lg:snap-center relative sm:top-96 md:top-0"
        ref={skillsRef}
      >
        <Skills />
      </section>

      <section
        id="experience"
        className="lg:snap-center relative top-10 sm:top-48 md:top-0"
        ref={workExperienceRef}
      >
        <WorkExperience />
      </section>

      <section
        id="projects"
        className="lg:snap-center relative top-10 sm:top-48 md:top-0"
        ref={projectsRef}
      >
        <Projects />
      </section>
    </div>
  );
}
