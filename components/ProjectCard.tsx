import React, { RefObject, useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import TechIcon from "./TechIcon";
import LinkIcon from "@mui/icons-material/Link";
import { Info, InfoCaption, InfoTitle } from "@mui-treasury/components/info";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { Tech } from "@/interfaces/Tech";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  img: string;
  title: string;
  url: string;
  techStack?: Tech[];
  description: React.ReactNode;
}

export default function ProjectCard({
  img,
  title,
  url,
  techStack = [],
  description,
}: Props) {
  const bouncyStyle = useBouncyShadowStyles();

  const [urlDisabled, setUrlDisabled] = useState<boolean>(false);
  const [imageWidth, setImageWidth] = useState<string>("w-auto");
  const [imageHeight, setImageHeight] = useState<string>("h-auto");
  const cardRef = useRef<HTMLDivElement>(null);
  const cardImageRef = useRef<HTMLImageElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const checkIfCardIsSelected = () => {
    const carouselItemHolder = cardRef.current?.parentElement;
    const selected = carouselItemHolder?.style.transform.includes("scale(1)");
    // Disable project url if the project card is unselected
    setUrlDisabled(!selected);
  };

  const checkImageSize = () => {
    if (!cardImageRef.current) return;
    const w = cardImageRef.current.naturalWidth;
    const h = cardImageRef.current.naturalHeight;
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;

    const wRatio = windowW / w;
    const hRatio = windowH / h;

    if (w > h) {
      // if (h * wRatio > windowH) setImageHeight(`h-[${windowH}px]`);
      if (h * wRatio > windowH) setImageHeight(`h-full`);
      // else setImageWidth(`w-[${windowW}px]`);
      else setImageWidth(`w-full`);
    }
    else if (w < h) {
      // if (w * hRatio > windowW) setImageWidth(`w-[${windowW}px]`);
      if (w * hRatio > windowW) setImageWidth(`w-full`);
      // else setImageHeight(`h-[${windowH}px]`);
      else setImageHeight(`h-full`);
    }
    else {
      // if (windowW < windowH) setImageWidth(`w-[${windowW}px]`);
      if (windowW < windowH) setImageWidth(`w-full`);
      // else setImageHeight(`h-[${windowH}px]`);
      else setImageHeight(`h-full`);
    }
  }

  useEffect(() => {
    checkIfCardIsSelected();

    const handleResize = () => {
      checkImageSize();
    };
    handleResize();
    // window.addEventListener("resize", handleResize);

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
      <Card
        ref={cardRef}
        className={`w-[80vw] sm:w-[500px]
      bg-transparent text-white shadow-none hover:shadow-lg ${bouncyStyle.root}`}
        onClick={checkIfCardIsSelected}
        onMouseMove={checkIfCardIsSelected}
      >
        <CardMedia
          ref={cardImageRef}
          className="h-96 bg-[#1b1b1b97]"
          component="img"
          image={img}
          alt={title}
          onClick={handleOpen}
        />
        <CardContent>
          <Info
            className="flex flex-col space-y-3"
            useStyles={useGalaxyInfoStyles}
          >
            <InfoTitle>
              {urlDisabled ? (
                <div className="flex space-x-2 items-center">
                  <h4 className="text-3xl">{title}</h4>
                  <LinkIcon />
                </div>
              ) : (
                <Link
                  className="flex space-x-2 items-center"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4 className="text-3xl">{title}</h4>
                  <LinkIcon />
                </Link>
              )}
            </InfoTitle>
            <div className="flex items-center space-x-3">
              {techStack.map((tech, index) => (
                <TechIcon
                  key={index}
                  icon={tech.icon}
                  alt={tech.name}
                  url={tech.url}
                  style={tech.style}
                />
              ))}
            </div>
            <InfoCaption>{description}</InfoCaption>
          </Info>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          ref={modalContentRef}
          className="
          flex
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-full h-full
          outline-none"
          onClick={(e) => {
            if (e.target != modalContentRef.current) return;
            handleClose();
          }}
        >
          <div className={`relative ${imageWidth} ${imageHeight} m-auto`}>
            <IconButton className="absolute right-0 mt-5 mr-5 text-white bg-gray-300/40 hover:bg-gray-500/40 z-10" onClick={handleClose}>
              <CloseIcon className="w-10 h-10 " />
            </IconButton>
            <Image
              src={img}
              alt={title}
              width={500}
              height={500}
              className={`relative ${imageWidth} ${imageHeight}`}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
