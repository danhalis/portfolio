import React from "react";
import { motion } from "framer-motion";
import Vietnam from "./Vietnam";
import Arrow from "./Arrow";
import { useMediaQuery } from "react-responsive";

function About() {
  const isSmallerScreen = useMediaQuery({ query: "(max-width: 1280px)" });

  return (
    <div
      className="h-screen max-w-7xl
      flex flex-col items-center
      px-10 mx-auto
      md:text-left"
    >
      <h3
        className="
        uppercase text-2xl text-gray-500 tracking-[20px]
        my-10 mt-16 md:my-28"
      >
        About
      </h3>

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
          <p className="text-base text-justify leading-7">
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
              className="hidden xl:inline-block absolute -top-[50px] -left-[230px] transform rotate-12"
              strokeWidth={20}
              strokeColor="#ffffff"
              width={80}
              height={80}
            />
            <Vietnam
              className="absolute text-[#ffffff35] -top-[0px] -left-[170px] md:-top-[60px] md:-left-[170px] xl:-top-[180px] xl:-left-[170px]"
              strokeWidth={isSmallerScreen ? 7 : 16}
              strokeColor="#ffffff9c"
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
