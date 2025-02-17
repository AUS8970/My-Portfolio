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
          <p className="mt-4 text-gray-600 text-lg"> I am <b>Asad Ullah Shamim</b>. I am currently pursuing my Intermediate studies along with a Diploma in Homeopathy 2nd year under the Bangladesh Homeopathy Board. My journey into programming began in 2024. While scrolling through YouTube, I came across various programming-related content, which sparked my curiosity and interest. Eventually, I enrolled in Programming Hero’s Web Development course, and now I am a <b>Front-End Developer</b>. In the future, I aspire to <b>become a Software Engineer</b>. </p>
        </div>
      </section>
    </div>
  );
};

export default About;