"use client";

import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About"), { ssr: false }); // About section needs access to client device
// (https://github.com/vercel/next.js/discussions/14469#discussioncomment-29422)
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

import { useEffect, useRef } from "react";
import Projects from "@/components/Projects";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
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
      overflow-scroll
      "
    >
      <Header />
      <section className="lg:h-1 lg:snap-center" />
      <section id="hero" className="lg:snap-center" ref={heroRef}>
        <Hero aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} />
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
        className="lg:snap-center"
        ref={projectsRef}
      >
        <Projects />
      </section>
    </div>
  );
}
