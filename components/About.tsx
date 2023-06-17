import React from "react";
import { motion } from "framer-motion";
import Vietnam from "./Vietnam";
import Arrow from "./Arrow";
import { useMediaQuery } from "react-responsive";

function About() {
  const isSmallerThan2XLScreen = useMediaQuery({
    query: "(max-width: 1536px)",
  });
  const isSmallerThan360Screen = useMediaQuery({
    query: "(max-width: 360px)",
  });

  return (
    <div
      className="h-screen max-w-7xl
      flex flex-col items-center
      px-10 mx-auto
      md:text-left"
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
            <Vietnam
              className={`
                text-[#ffffff9c]
                absolute
                ${
                  isSmallerThan360Screen
                    ? "-top-[0px] -left-[200px]"
                    : "top-[25px] -left-[300px]"
                }
                md:-top-[120px] md:-left-[300px]
                2xl:-top-[110px] 2xl:-left-[100px]`}
              strokeWidth={isSmallerThan2XLScreen ? 7 : 16}
              strokeColor="#ffffff9c"
              height={
                isSmallerThan360Screen
                  ? 300
                  : isSmallerThan2XLScreen
                  ? 350
                  : 360
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
