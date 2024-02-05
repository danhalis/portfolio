"use client"

import React from "react";
import Carousel from "react-spring-3d-carousel";

interface Props {
  showNavigation: boolean;
  slides: any[];
  goToSlide: number;
  animationConfig: object;
  offsetFn: (offsetFromCenter: number, index: number) => {
    transform?: string | undefined;
    left?: string | number | undefined;
    opacity?: number | undefined;
  }
}

function CarouselWrapper({
  showNavigation,
  slides,
  goToSlide,
  animationConfig,
  offsetFn,
}: Props) {
  return <Carousel
    showNavigation={showNavigation}
    slides={slides}
    goToSlide={goToSlide}
    animationConfig={animationConfig}
    offsetFn={offsetFn}
  />
}

export default CarouselWrapper;