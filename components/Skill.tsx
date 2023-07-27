import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  name: string;
  img: string;
  url?: string;
  style?: React.CSSProperties;
  fromLeft?: boolean;
}

function Skill({ name, img, url, style, fromLeft = false }: Props) {
  const [viewPortWidth, setViewPortWidth] = useState(0);

  const isSmallerThanSmScreen = useMediaQuery({
    query: "(max-width: 640px)",
  });
  const isSmallerThanMdScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = (
    <motion.div
      className="group relative flex cursor-pointer"
      initial={{
        x: fromLeft ? -100 : 100,
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        className={`rounded-full border border-gray-500 object-contain
        w-[20vw] h-[20vw] sm:w-24 sm:h-24 md:w-28 md:h-28
        filter group-hover:grayscale transition duration-300 ease-in-out`}
        width={
          isSmallerThanSmScreen
            ? viewPortWidth * 0.2
            : isSmallerThanMdScreen
            ? 96
            : 112
        }
        height={
          isSmallerThanSmScreen
            ? viewPortWidth * 0.2
            : isSmallerThanMdScreen
            ? 96
            : 112
        }
        style={style}
        src={img}
        alt={name}
      />
      <div
        className="absolute opacity-0
        rounded-full z-0
        flex items-center justify-center
        w-[20vw] h-[20vw] sm:w-24 sm:h-24 md:w-28 md:h-28
        group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out"
      >
        <p className="text-base font-bold text-center text-black opacity-100">
          {name}
        </p>
      </div>
    </motion.div>
  );
  return url ? (
    <Link href={url} target="_blank">
      {content}
    </Link>
  ) : (
    <div>{content}</div>
  );
}

export default Skill;
