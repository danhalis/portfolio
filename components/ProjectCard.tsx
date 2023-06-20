import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import TechIcon from "./TechIcon";
import LinkIcon from "@mui/icons-material/Link";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
interface Props {
  img: string;
  title: string;
  url: string;
  techStack?: {
    name: string;
    url: string;
    icon: string;
    style?: React.CSSProperties;
  }[];
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

  return (
    <Card
      className={`w-[80vw] sm:w-[500px]
      bg-transparent text-white shadow-none hover:shadow-lg ${bouncyStyle.root}`}
    >
      <CardMedia
        className="h-96 bg-[#1b1b1b97]"
        component="img"
        image={img}
        alt={title}
      />
      <CardContent>
        <Info
          className="flex flex-col space-y-3"
          useStyles={useGalaxyInfoStyles}
        >
          <InfoTitle>
            <Link
              className="flex space-x-2 items-center"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-3xl">{title}</h4>
              <LinkIcon />
            </Link>
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
  );
}
