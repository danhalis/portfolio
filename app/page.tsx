"use client";

import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About"), { ssr: false }); // About section needs access to client device
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false }); // Projects section needs access to client device
const WorkExperience = dynamic(() => import("@/components/WorkExperience"), { ssr: false });
// (https://github.com/vercel/next.js/discussions/14469#discussioncomment-29422)
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const workExperienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    heroRef.current?.scrollIntoView();
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
        id="projects"
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
