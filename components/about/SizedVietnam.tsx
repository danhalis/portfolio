// "use client"

import React from "react";
import Vietnam from "../Vietnam";
import { useMediaQuery } from "react-responsive";


function SizedVietnam() {
  const isSmallerThan2XLScreen = useMediaQuery({
    query: "(max-width: 1536px)",
  });
  const isSmallerThan360Screen = useMediaQuery({
    query: "(max-width: 360px)",
  });

  return <Vietnam
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
}

export default SizedVietnam;