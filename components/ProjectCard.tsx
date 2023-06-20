import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import TechIcon from "./TechIcon";
import LinkIcon from "@mui/icons-material/Link";

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
  return (
    <Card
      className="w-[80vw] sm:w-[500px]
      bg-transparent text-white shadow-none"
    >
      <CardMedia
        className="h-96 bg-[#1b1b1b97]"
        component="img"
        image={img}
        alt={title}
      />
      <CardContent className="flex flex-col space-y-3">
        <Link
          className="flex space-x-2 items-center"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="text-3xl">{title}</h4>
          <LinkIcon />
        </Link>
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
        {description}
      </CardContent>
    </Card>
  );
}
