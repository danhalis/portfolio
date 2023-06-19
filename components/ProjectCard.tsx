import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import TechIcon from "./TechIcon";

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

export default function RecipeReviewCard({
  img,
  title,
  url,
  techStack = [],
  description,
}: Props) {
  return (
    <Card
      style={{
        width: 500,
        boxShadow: "none",
        backgroundColor: "transparent",
        color: "white",
      }}
    >
      <CardMedia component="img" image={img} alt={title} />
      <CardContent className="flex flex-col space-y-3">
        <Link href={url} target="_blank" rel="noreferrer">
          <h4 className="text-3xl">{title}</h4>
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
