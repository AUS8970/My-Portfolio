import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import Lottie from "lottie-react";
import aboutJsonData from "../assets/Animation - 1738939887045.json";

const About = () => {
  return (
    <div className='pb-20 px-5 bg-gray-100 text-center'>
      <section id="about" className="flex flex-col min-h-screen justify-center items-center">
        <div className="w-[300px]">
          <Lottie className='w-full' animationData={aboutJsonData} loop={true} />
        </div>
        <div className="w-full text-center col-span-2">
          <h2 className="text-4xl font-bold text-gray-800"> About Me </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto"> I am a passionate <b> frontend web developer</b>, currently learning web development using Next.js and MaterialUI and want to become a software engineer in the future. I started learning programming in 2024 and am improving my skills by learning from YouTube and Programming Hero platforms. I am a homeopathy student, pursuing a diploma under Bangladesh Homeopathy Board and want to innovate something new using AI and technology in the future. I have a great interest in science and technology, although my main academic background is not in science, but I have a strong desire to learn new technologies self-taught. I am an innovative thinker, always wanting to create something new that no one has done before, especially I dream of working in AI, automation and medical technology. </p>
        </div>
      </section>
    </div>
  );
};

export default About;