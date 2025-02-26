import React from 'react';
import { LuCircleArrowOutUpRight } from 'react-icons/lu';
import { Link, useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, Chip } from '@material-tailwind/react';
import { FaGithub } from 'react-icons/fa';

const ProjectDetails = () => {

  const projects = [
    {
      id: 1,
      title: "Hero Employee Management",
      description: "An advanced employee management system that helps track workload, salaries, contracts, and payroll processing. It includes workflow updates, HR approvals, and automated reporting. Users can log in, manage roles, receive notifications, and analyze data.",
      techStack: ["React.js", "Node.js", "MongoDB", "Firebase Authentication", "Tailwind CSS", "Express.js", "Material Tailwind"],
      developmentChallenges: "Implementing real-time salary updates, handling multi-role-based access, and ensuring secure authentication were major challenges.",
      futureEnhancements: "Plan to integrate AI-driven analytics, real-time chat support, and automated payroll generation.",
      image: "https://i.ibb.co.com/GQTQ4kJV/project-1.jpg",
      github: "https://github.com/AUS8970/Hero-Employee-Management",
      liveLink: "https://hero-employee-management-aus.web.app"
    },
    {
      id: 2,
      title: "Food Shop",
      description: "A complete e-commerce platform where food lovers can browse, order, and review food items. Features include inventory management, role-based access (Admin/User), a shopping cart, and order tracking. Payment integration, responsive design, user authentication, and product rating system enhance the experience.",
      techStack: ["React.js", "Redux", "Firebase", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      developmentChallenges: "Integrating a seamless checkout experience, managing large-scale inventory, and handling payment security were key challenges.",
      futureEnhancements: "Plan to introduce AI-powered personalized recommendations, faster checkout process, and a mobile-friendly PWA version.",
      image: "https://i.ibb.co.com/prwJwZ2v/project-2.jpg",
      github: "https://github.com/AUS8970/Food-Shop",
      liveLink: "https://food-shop-aus.web.app"
    },
    {
      id: 3,
      title: "Equi Sports",
      description: "An e-commerce platform for exploring and purchasing sports accessories. Users can browse by category, view detailed product descriptions, authenticate accounts, track orders, and make secure payments. Features include an admin panel, stock management, and user reviews.",
      techStack: ["React.js", "Tailwind CSS", "Firebase", "Node.js", "Express.js", "MongoDB"],
      developmentChallenges: "Ensuring smooth product filtering, implementing secure payment gateways, and handling real-time stock updates were major challenges.",
      futureEnhancements: "Plan to add AR-based product previews, real-time order tracking, and social media integration for product sharing.",
      image: "https://i.ibb.co.com/LDytHbDP/project-3.jpg",
      github: "https://github.com/AUS8970/Equi-Sports",
      liveLink: "https://equi-sports-aus.web.app"
    }
  ];
  

  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  if (!project) {
    return <h2 className="text-center text-2xl font-bold mt-10">Project Not Found</h2>;
  }
  
  return (
    <div className="justify-center items-center min-h-screen p-10">
      <Typography className="font-bold text-gray-800 text-4xl text-center pt-14 pb-10">
        {project.title}
      </Typography>
      <Card className="grid md:grid-cols-2">
        <div className="">
          <Link to={project.liveLink} target="_blank" className="">
            <CardHeader>
              <img src={project.image} alt={project.title} className="w-full object-cover" />
            </CardHeader>
          </Link>
        </div>
        <div className="text-center md:text-start">
          <CardBody className='pt-0'>
            <Typography className="text-gray-600">
              <b> Description: </b> {project.description}
            </Typography>
            <Typography className="mt-2 text-gray-600">
              <b> Development Challenges: </b> {project.developmentChallenges}
            </Typography>
            <Typography className="mt-2 text-gray-600">
              <b> Future Enhancements: </b> {project.futureEnhancements}
            </Typography>
            <div className="mt-2 flex flex-wrap gap-4">
              <b className='text-gray-600'> Tech Stack: </b> {
                project.techStack.map((tech, i) => {
                  return <Chip key={i} className="bg-green-300 text-base font-normal rounded-full text-green-800 px-2" value={tech}> </Chip>
                })
              }
            </div>
          </CardBody>
          <div className="flex justify-center md:justify-start gap-4 mx-5">
            <Link to={project.github} target="_blank" className="">
              <Button className='bg-none hover:bg-[#0B093A] border border-[#0B093A] text-[#0B093A] hover:text-white text-sm px-10 py-2 flex gap-1 items-center justify-center'> 
                <span className=""> <FaGithub /> </span>
                <p className=""> GitHub </p>
              </Button>
            </Link>
            <Link to={project.liveLink} target="_blank" className="">
              <Button className='bg-[#0B093A] text-white text-sm px-10 py-2 flex gap-1 items-center justify-center'>
                <span className=""> <LuCircleArrowOutUpRight /> </span>
                <p className=""> Live Site </p>
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetails;