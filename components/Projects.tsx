import React, { useEffect, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [xDown, setXDown] = useState<number | null>(null);
  const [yDown, setYDown] = useState<number | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        back();
        break;
      case "ArrowRight":
        forward();
        break;
      default:
        break;
    }
  };

  const back = () => {
    setSelectedSlide((prev) => {
      if (prev == 0) {
        return slides.length - 1;
      }
      return prev - 1;
    });
  };
  const forward = () => {
    setSelectedSlide((prev) => {
      if (prev == slides.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const getTouches = (evt: React.TouchEvent<HTMLDivElement>) => {
    return evt.touches;
    // || evt.originalEvent.touches // browser API
  };

  const slides = [
    {
      key: "0",
      content: (
        <ProjectCard
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/projects/netflix-clone.png"
          title="Netflix Website Clone"
          url="https://netflix-clone-app-danhalis.vercel.app/"
          techStack={[
            {
              name: "Next.js",
              icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/next.png",
              url: "https://nextjs.org/",
            },
            {
              name: "React.js",
              icon: "https://reactnative.dev/img/header_logo.svg",
              url: "https://reactjs.org/",
            },
            {
              name: "Tailwind CSS",
              icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
              url: "https://tailwindcss.com/",
            },
            {
              name: "react-hook-form",
              icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/react-hook-form.png",
              url: "https://www.react-hook-form.com/",
            },
            {
              name: "Firebase",
              icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
              url: "https://firebase.google.com/",
            },
            {
              name: "TypeScript",
              icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
              url: "https://www.typescriptlang.org/",
            },
          ]}
          description={
            <p>
              A clone of Netflix web app powered by <code>Next.js</code> +{" "}
              <code>Tailwind CSS</code> + <code>Firebase</code>.
            </p>
          }
        />
      ),
    },
    {
      key: "1",
      content: (
        <ProjectCard
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/projects/tip-calculator-app.gif"
          title="Tip Calculator"
          url="https://tip-calculator-app-danhalis.vercel.app/"
          techStack={[
            {
              name: "Next.js",
              icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/next.png",
              url: "https://nextjs.org/",
            },
            {
              name: "React.js",
              icon: "https://reactnative.dev/img/header_logo.svg",
              url: "https://reactjs.org/",
            },
            {
              name: "Tailwind CSS",
              icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
              url: "https://tailwindcss.com/",
            },
            {
              name: "react-hook-form",
              icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/react-hook-form.png",
              url: "https://www.react-hook-form.com/",
            },
            {
              name: "TypeScript",
              icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
              url: "https://www.typescriptlang.org/",
            },
          ]}
          description={
            <p>
              A web app powered by <code>Next.js</code> +{" "}
              <code>Tailwind CSS</code> that calculates tip given the bill, tip
              percentage and number of people.
            </p>
          }
        />
      ),
    },
    {
      key: "2",
      content: (
        <ProjectCard
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/projects/path-to-love.gif"
          title="Path To Love"
          url="https://pathtolove.danhalis.repl.co/"
          techStack={[
            {
              name: "JavaScript",
              icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              name: "TypeScript",
              icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
              url: "https://www.typescriptlang.org/",
            },
          ]}
          description={
            <p>
              A web-based game coded in <code>JavaScript/TypeScript</code>.
            </p>
          }
        />
      ),
    },
    {
      key: "3",
      content: (
        <ProjectCard
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/projects/plantech.gif"
          title="Plant-Tech"
          url="https://github.com/danhalis/plantech"
          techStack={[
            {
              name: "Xamarin",
              icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/xamarin.svg",
              url: "https://dotnet.microsoft.com/apps/xamarin",
            },
            {
              name: "C#",
              icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
              url: "https://learn.microsoft.com/dotnet/csharp/",
            },
            {
              name: "Python",
              icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
              url: "https://www.python.org",
            },
            {
              name: "Azure IoT Hub",
              icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/azure-iot-hub.svg",
              url: "https://azure.microsoft.com/products/iot-hub/",
            },
          ]}
          description={
            <p>
              This is an IoT school project powered by <code>Xamarin</code> +{" "}
              <code>Python</code> + <code>Azure IoT Hub</code>. The objective is
              to build an application that monitors the environment conditions
              inside a farm container.
            </p>
          }
        />
      ),
    },
    {
      key: "4",
      content: (
        <ProjectCard
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/projects/budget-manager.gif"
          title="Budget Manager"
          url="https://github.com/danhalis/BudgetManager"
          techStack={[
            {
              name: "WPF",
              icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/windows.png",
              url: "https://learn.microsoft.com/dotnet/desktop/wpf",
            },
            {
              name: "C#",
              icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
              url: "https://learn.microsoft.com/dotnet/csharp/",
            },
          ]}
          description={
            <p>
              This is a school project put together by me and 2 other people. It
              is a Windows desktop app powered by <code>WPF .NET</code> that
              helps record expenses and income.
            </p>
          }
        />
      ),
    },
    {
      key: "5",
      content: (
        <ProjectCard
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/projects/calculator-app.gif"
          title="Calculator App"
          url="https://github.com/danhalis/CalculatorApp"
          techStack={[
            {
              name: "Xamarin",
              icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/xamarin.svg",
              url: "https://dotnet.microsoft.com/apps/xamarin",
            },
            {
              name: "C#",
              icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
              url: "https://learn.microsoft.com/dotnet/csharp/",
            },
          ]}
          description={
            <p>
              A mobile calculator app powered by <code>Xamarin</code>.
            </p>
          }
        />
      ),
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {
        setSelectedSlide(index);
      },
    };
  });

  return (
    <div
      className="
      h-auto sm:h-screen max-w-7xl
      flex flex-col items-center
      px-10 mx-auto"
    >
      <h3 className="section-title mb-0">Projects</h3>

      <div
        className="h-5/6"
        style={{ width: "80%", margin: "0 auto" }}
        onTouchStart={(evt: React.TouchEvent<HTMLDivElement>) => {
          const firstTouch = getTouches(evt)[0];
          setXDown(firstTouch.clientX);
          setYDown(firstTouch.clientY);
        }}
        onTouchMove={(evt: React.TouchEvent<HTMLDivElement>) => {
          if (!xDown && !yDown) {
            return;
          }
          let xUp = evt.touches[0].clientX;
          let yUp = evt.touches[0].clientY;

          let xDiff = xDown! - xUp;
          let yDiff = yDown! - yUp;
          if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
              /* left swipe */
              forward();
              setXDown(null);
              setYDown(null);
            } else {
              /* right swipe */
              back();
              setXDown(null);
              setYDown(null);
            }
          }
        }}
      >
        <Carousel
          showNavigation={false}
          slides={slides}
          goToSlide={selectedSlide}
          animationConfig={config.slow}
          offsetFn={(offsetFromCenter: number) => ({
            opacity:
              offsetFromCenter == 0
                ? 1
                : Math.abs(offsetFromCenter) == 1
                ? 0.1
                : 0,
          })}
        />
      </div>
    </div>
  );
}

export default Projects;
