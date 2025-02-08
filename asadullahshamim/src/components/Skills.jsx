// import React from 'react';
// import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
// import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
// import { RiNextjsFill } from 'react-icons/ri';
// import { IoLogoJavascript } from 'react-icons/io';
// import { SiMongodb } from 'react-icons/si';
// import Chart from "react-apexcharts";

// const Skills = () => {
//   const chartConfig = {
//     type: "pie",
//     width: 280,
//     height: 280,
//     series: [30, 70],
//     options: {
//       chart: {
//         toolbar: {
//           show: false,
//         },
//       },
//       title: {
//         show: "Web",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       colors: ["#020617", "#020617"],
//       legend: {
//         show: false,
//       },
//     },
//   };


//   const skills = [
//     { id: 1, name: "React.js", icon: <FaReact className="text-blue-500 text-5xl" /> },
//     { id: 2, name: "Next.js", icon: <RiNextjsFill className="text-black text-5xl" /> },
//     { id: 3, name: "JavaScript", icon: <IoLogoJavascript className="bg-yellow-500 pt-5 pl-5 pr-2 text-5xl" /> },
//     { id: 4, name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
//     { id: 5, name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
//     { id: 6, name: "GitHub", icon: <FaGithub className="text-gray-800 text-5xl" /> }
//   ];

//   return (
//     <section id="skills" className="p-10 text-[#0B093A] min-h-screen flex items-center justify-center">
//       <Card>
//         <CardBody className="mt-4 grid place-items-center px-2">
//           <Chart {...chartConfig} />
//         </CardBody>
//       </Card>

//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8"> Technology </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
//           {skills.map(skill => (
//             <Card key={skill.id} className="p-6 flex flex-col items-center shadow-lg rounded-xl border-2 border-[#0B093A] bg-white hover:shadow-xl hover:shadow-[#0B093A] transition">
//               <CardBody className="flex flex-col items-center">
//                 {skill.icon}
//                 <Typography variant="h6" color="blue-gray" className="mt-4 font-semibold">
//                   {skill.name}
//                 </Typography>
//               </CardBody>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from 'react';
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMongodb } from 'react-icons/si';
import Chart from "react-apexcharts";

const Skills = () => {
  const chartConfig = {
    type: "pie",
    width: 300,
    height: 300,
    series: [30, 70],
    options: {
      chart: { toolbar: { show: false }},
      labels: ["Backend (30%)", "Frontend (70%)"],
      colors: [ "[#0B093A]", "#373333fa",],
      legend: { position: "bottom" },
    },
  };

  return (
    <section id="skills" className="p-20 min-h-[530px] flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-gray-800 pb-10"> My Skills </h2>
      <Card className="p-6 shadow-lg text-white">
        <CardBody className="grid place-items-center">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </section>
  );
};

export default Skills;
