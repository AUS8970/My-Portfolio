import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Hero Employee Management",
      description: "A web system for monitoring workload, tracking salaries, managing contracts, and payroll processing with workflow updates and HR approvals.",
      image: "https://i.ibb.co.com/GQTQ4kJV/project-1.jpg",
      github: "https://github.com/AUS8970/Hero-Employee-Management",
      liveLink: "https://hero-employee-management-aus.web.app"
    },
    {
      id: 2,
      title: "Food Shop",
      description: "An e-commerce platform for food lovers to explore, purchase, review food items with inventory updates and role-based access control.",
      image: "https://i.ibb.co.com/prwJwZ2v/project-2.jpg",
      github: "https://github.com/AUS8970/Food-Shop",
      liveLink: "https://food-shop-aus.web.app"
    },
    {
      id: 3,
      title: "Equi Sports",
      description: "A responsive e-commerce platform for exploring, purchasing sports accessories with category navigation, user authentication, and dynamic details.",
      image: "https://i.ibb.co.com/LDytHbDP/project-3.jpg",
      github: "https://github.com/AUS8970/Equi-Sports",
      liveLink: "https://equi-sports-aus.web.app"
    }
  ];

  return (
    <div>
      <section id="projects" className="py-10 bg-gray-100">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-800 p-10"> My Projects </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <Card key={project.id} className="flex flex-col bg-white justify-between p-3 shadow-lg rounded-xl overflow-hidden">
                <CardHeader className="overflow-hidden">
                  <img src={project.image} alt={`${project.name} Image`} className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105" />
                </CardHeader>
                <CardBody className="p-2">
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-black font-semibold"> {project.title} </Typography>
                  <Typography> {project.description} </Typography>
                </CardBody>
                <CardFooter className="p-2 w-full">
                  <Button className='mt-2 bg-[#0B093A] text-white text-sm p-2 w-full'> 
                    <a href={`/project/${project.id}`} className="flex gap-1 items-center justify-center">
                      Details 
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button className='m-5 flex mx-auto bg-gray-400 text-black text-sm p-2'> 
            <a href={"https://www.github.com/AUS8970"} target="_blank" className="flex gap-1 items-center justify-center">
              <span className=""> <FaGithub /> </span>
               My All Project
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;