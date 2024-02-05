import React from "react";
import { motion } from "framer-motion";
import Arrow from "../Arrow";
import { useMediaQuery } from "react-responsive";
import SizedVietnam from "./SizedVietnam";

function About() {
  const isSmallerThan360Screen = useMediaQuery({
    query: "(max-width: 360px)",
  });

  return (
    <div
      className={`h-auto sm:h-screen max-w-7xl
      flex flex-col items-center
      px-10 mx-auto
      md:text-left
      ${isSmallerThan360Screen ? "overflow-hidden" : ""}`}
    >
      <h3 className="section-title">About</h3>

      <div
        className="flex flex-col
      md:flex-row md:space-x-10 space-y-10"
      >
        <motion.img
          className="object-cover rounded-lg
          md:w-96 md:h-96 md:rounded-lg z-10"
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          src="https://raw.githubusercontent.com/danhalis/portfolio/master/public/about-photo.jpg"
        />

        <div className="flex">
          <p className="text-base text-justify leading-7 max-w-2xl 2xl:pr-10">
            My name is <b>HIEU DAO LE DUC</b>.<br />
            <b>Dan Halis (danhalis)</b> is my artist/in-game name. I come from
            Vietnam 🇻🇳.
            <br />
            <br />I graduated in Computer Science at John Abbott College in
            2022. Movies, music and video games are my go-to hobbies. I also
            love programming, especially software development since softwares
            are cool and the world needs them.
          </p>
          <div className="relative">
            <Arrow
              className="hidden 2xl:inline-block absolute -top-[30px] -left-[150px] transform rotate-6"
              strokeWidth={20}
              strokeColor="#ffffff"
              width={55}
              height={55}
            />
            <SizedVietnam />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
