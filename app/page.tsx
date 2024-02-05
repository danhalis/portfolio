"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/about/About";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/workExperience/WorkExperience";
import Projects from "@/components/projects/Projects";

import { useEffect, useRef, RefObject } from "react";

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
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    const splitedUrl = currentUrl.split("/#");
    const elementId = splitedUrl[splitedUrl.length - 1];

    console.log(refs[elementId]);
    if (refs[elementId]) {
      refs[elementId].current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

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
        <WorkExperience onMount={() => {
          const currentUrl = window.location.href;
          const splitedUrl = currentUrl.split("/#");
          const elementId = splitedUrl[splitedUrl.length - 1];
          if (elementId == "experience") {
            workExperienceRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }} />
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
