import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      className="h-auto sm:h-screen max-w-7xl
      flex flex-col items-center
      px-10 mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="section-title mb-10">Skills</h3>

      <div className="text-[#ffffffca] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-7">
        <Skill
          name="React.js"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/react.png"
          url="https://react.dev/"
          style={{
            backgroundColor: "#20232a",
            padding: 15,
          }}
          fromLeft
        />
        <Skill
          name="Next.js"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/next.png"
          url="https://nextjs.org/"
          fromLeft
        />
        <Skill
          name="Tailwind CSS"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/tailwind.png"
          url="https://tailwindcss.com/"
          style={{
            backgroundColor: "#0B1120",
            padding: 15,
          }}
          fromLeft
        />
        <Skill
          name="Firebase"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/firebase.png"
          url="https://firebase.google.com/"
          style={{
            backgroundColor: "#fff",
          }}
          fromLeft
        />
        <Skill
          name="ASP.NET"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/asp.net.png"
          url="https://asp.net"
          style={{
            backgroundColor: "#fff",
            padding: 15,
          }}
          fromLeft
        />
        <Skill
          name="WPF"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/windows.png"
          url="https://learn.microsoft.com/dotnet/desktop/wpf"
          style={{
            backgroundColor: "#171717",
            padding: 20,
          }}
          fromLeft
        />
        <Skill
          name="React Native"
          img="/skills/react-native.png"
          url="https://reactnative.dev/"
          style={{
            backgroundColor: "#20232a",
            paddingBottom: 5,
          }}
          fromLeft
        />
        <Skill
          name="Xamarin"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/xamarin.svg"
          url="https://dotnet.microsoft.com/apps/xamarin"
          style={{
            backgroundColor: "#171717",
            padding: 15,
          }}
          fromLeft
        />

        <Skill
          name="Azure"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/azure.webp"
          url="https://azure.microsoft.com/"
          style={{
            backgroundColor: "#fff",
            paddingBottom: 10,
          }}
        />
        <Skill
          name="C#"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/csharp.png"
          url="https://learn.microsoft.com/dotnet/csharp/"
        />
        <Skill
          name="Java"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/java.png"
          url="https://www.java.com/"
          style={{
            padding: 15,
          }}
        />
        <Skill
          name="Python"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/python.png"
          url="https://www.python.org/"
          style={{
            padding: 10,
          }}
        />
        <Skill
          name="JavaScript"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/javascript.svg"
          url="https://www.javascript.com/"
          style={{
            backgroundColor: "#F7DF1E",
          }}
        />
        <Skill
          name="TypeScript"
          img="https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/typescript.svg"
          url="https://www.typescriptlang.org/"
          style={{
            backgroundColor: "#007ACC",
          }}
        />
      </div>
    </motion.div>
  );
}

export default Skills;
