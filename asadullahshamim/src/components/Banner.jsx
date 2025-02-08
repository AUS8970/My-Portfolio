import React from 'react';
import Lottie from "lottie-react";
import devJsonData from "../assets/Animation - 1738931216422.json";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div>
      <section className="max-h-screen flex flex-col-reverse sm:flex-col-reverse md:flex-row items-center justify-center mb-20 sm:mb-20 md:mb-0">
        <motion.div animate={{ x:100 }} transition={{ duration: 2, delay: 1, ease: 'easeOut' }} className="md:w-1/2 w-full text-center md:text-start space-y-3 text-[#0B093A]">
          <h1 className="font-bold text-4xl"> <span className=""> Asad Ullah Shamim </span> </h1>
          <h1 className="font-semibold text-xl"> Web Developer </h1>
          <div className="flex gap-5 text-2xl items-center justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/asadullahshamimofficial" target="_blank" className="w-8 bg-white rounded-full p-1">
              <FaLinkedin />
            </a>
            <a href="https://www.github.com/AUS8970" target="_blank" className="w-8 bg-white rounded-full p-1"> 
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/asadullahshamimofficial" target="_blank" className="w-8 bg-white rounded-full p-1"> 
              <FaFacebook />
            </a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=www.aus8970@gmail.com&tf=cm" target="_blank" className="w-8 bg-white rounded-full p-1"> 
              <MdOutlineMail />
            </a>
          </div>
          <a href="https://drive.google.com/file/d/1tx5oGiqFOalmWjOKx183b3DoCfTXCySV/view?usp=sharing" target="_blank">
            <button className="bg-[#0B093A] text-white py-2 px-3 mt-5 rounded-md font-semibold"> Resume </button>
          </a>
        </motion.div>
        <motion.div animate={{ x:-100 }} transition={{ duration: 2, delay: 1, ease: 'easeOut' }} className="md:w-1/2 w-full">
          <Lottie animationData={devJsonData} loop={true} />
        </motion.div>
      </section>
    </div>
  );
};

export default Banner;