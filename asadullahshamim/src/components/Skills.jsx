import React from 'react';
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMongodb } from 'react-icons/si';
import { CiCircleMore } from "react-icons/ci";

const Skills = () => {

  const skills = [
    { id: 2, name: "Next.js", icon: <RiNextjsFill className="text-black text-5xl" /> },
    { id: 1, name: "React.js", icon: <FaReact className="text-blue-500 text-5xl" /> },
    { id: 3, name: "JavaScript", icon: <IoLogoJavascript className="bg-yellow-300 pt-5 pl-5 pr-2 text-5xl" /> },
    { id: 4, name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
    { id: 5, name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
    { id: 6, name: "Others", icon: <CiCircleMore className="text-gray-800 text-5xl" /> }
  ];

  return (
    <section id="skills" className="p-20 pb-32 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-gray-800 pb-10"> My Skills </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
        {skills.map(skill => (
          <Card key={skill.id} className="p-6 flex flex-col items-center shadow-lg rounded-xl bg-white hover:shadow-xl hover:shadow-gray-300 transition">
            <CardBody className="flex flex-col items-center text-black">
              {skill.icon}
              <Typography variant="h6" color="blue-gray" className="mt-4 font-semibold">
                {skill.name}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
