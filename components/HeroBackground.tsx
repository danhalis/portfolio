import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import opacityAnimation from "@/constants/animation/hero-background-opacity.json";
import { isMobile } from "react-device-detect";

function HeroBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <div className="relative w-full h-full mt-1">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          style: {
            position: "absolute",
          },
          fpsLimit: 120,
          particles: {
            number: {
              density: {
                enable: !isMobile,
                area: 900,
              },
              value: isMobile ? 4 : 5,
            },
            shadow: {
              enable: true,
              color: "#00c8ff",
              blur: 30,
            },
            shape: {
              type: ["circle", "image"],
              images: [
                {
                  src: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/code.png",
                },
              ],
            },
            color: {
              value: "#00c8ff73",
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: {
                min: 15,
                max: 15,
              },
            },
            links: {
              color: "ffffff",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 2,
            },
            move: {
              direction: "none",
              enable: true,
              speed: 5,
              outModes: {
                default: "bounce",
              },
            },
            collisions: {
              enable: false,
              maxSpeed: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2"
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: opacityAnimation,
        }}
        transition={{
          duration: 2.5,
        }}
      >
        <div className="flex justify-center items-center">
          <div
            className="absolute
            border-x-8 border-y-0 border-[#333333]
            rounded-full
            h-[500px] w-[500px]
            animate-pulse"
          />
          <div
            className="absolute
            border-2 border-[#fffb003c] shadow-[0_0_50px_20px_rgba(255,251,0,0.24)]
            rounded-full
            h-[650px] w-[650px]
            animate-pulse"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default HeroBackground;
