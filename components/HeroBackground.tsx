import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

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

  let windowWidth = 0;
  if (typeof window !== "undefined") {
    windowWidth = window.innerWidth;
  }

  return (
    <div className="relative w-full h-full">
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
              value: 5,
            },
            shape: {
              type: "circle",
            },
            color: {
              value: ["#fffb00", "#00c8ff"],
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: {
                min: windowWidth <= 512 ? 10 : 15,
                max: windowWidth <= 512 ? 10 : 15,
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
      <Particles
        id="tsparticles1"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          style: {
            position: "absolute",
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 3,
            },
            shape: {
              type: "image",
              images: [
                {
                  src: "/code.png",
                  fill: true,
                },
              ],
            },
            color: {
              value: ["#fffb00", "#00c8ff"],
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: {
                min: windowWidth <= 512 ? 10 : 15,
                max: windowWidth <= 512 ? 10 : 15,
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
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        }}
        transition={{
          duration: 2.5,
        }}
      >
        <div className="relative flex justify-center items-center">
          <div
            className="absolute border border-[#3b6c79] rounded-full
        h-[500px] w-[500px] mt-52 animate-ping"
          />
          <div
            className="absolute border border-[#333333] rounded-full
        h-[300px] w-[300px] mt-52"
          />
          <div
            className="absolute border border-[#fffb003c] rounded-full
        h-[500px] w-[500px] mt-52 animate-pulse"
          />
          <div
            className="absolute border-2 border-[#00c8ff73] rounded-full
        h-[650px] w-[650px] mt-52 animate-pulse"
          />
          <div
            className="absolute border border-[#333333] rounded-full
        h-[800px] w-[800px] mt-52"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default HeroBackground;
