import React from 'react';
import { Card, CardBody } from "@material-tailwind/react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaLaptopCode, FaServer } from "react-icons/fa";
import { GiToolbox } from "react-icons/gi";
import { CgMoreO } from "react-icons/cg";

const Skills = () => {

  const skills = [
    {
      id: 1,
      name: "Frontend",
      icon: <FaLaptopCode />,
      data: [
        { id: 1, name: "HTML", range: 95 },
        { id: 2, name: "CSS", range: 90 },
        { id: 3, name: "JavaScript", range: 85 },
        { id: 4, name: "React.js", range: 80 },
        { id: 5, name: "Tailwind CSS", range: 85 }
      ]
    },
    {
      id: 2,
      name: "Backend",
      icon: <FaServer />,
      data: [
        { id: 1, name: "Node.js", range: 90 },
        { id: 2, name: "Express.js", range: 85 },
        { id: 3, name: "Authentication", range: 80 }
      ]
    },
    {
      id: 3,
      name: "Other",
      icon: <CgMoreO />,
      data: [
        { id: 1, name: "MongoDB", range: 90 },
        { id: 2, name: "Firebase", range: 80 },
        { id: 3, name: "Git & GitHub", range: 90 },
        { id: 4, name: "VS Code", range: 95 }
      ]
    }
  ]

  // <button type="button" class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...">
  //   Hover me
  // </button>

  return (
    <section id="skills" className="p-20 pb-32 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-gray-800 pb-10">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {skills.map(skill => (
          <Card key={skill.id} className="p-6 flex flex-col items-center shadow-lg rounded-xl bg-gradient-to-r from-[#0B093A] to-[#090654] text-white hover:shadow-xl hover:shadow-gray-300 transition">
            <CardBody className="flex flex-col">
              <div className="flex gap-2 items-center mb-4">
                <div className="text-xl">{skill.icon}</div>
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
              </div>
              <ul className="w-full">
                {skill.data.map(item => (
                  <li 
                    key={item.id} 
                    className="flex flex-col justify-between space-y-2 py-1"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{item.name}</span>
                      <span className="">{item.range}%</span>
                    </div>
                    <progress className="progress text-[#ffffff] w-56" value={item.range} max="100"></progress>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;