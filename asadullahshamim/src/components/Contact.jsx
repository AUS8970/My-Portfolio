import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@material-tailwind/react';
import ContactJsonData from "../assets/Contact.json";
import Lottie from 'lottie-react';

const Contact = () => {

  const { handleSubmit, register, reset, formState: { errors } } = useForm();

  const handleSignup = async (data) => {
    try {
      const messageInfo = {
        name: data.name,
        email: data.email,
        message: data.message,
      };
      console.log(messageInfo);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id='contact' className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-gray-800 pb-4 text-center"> Contact Me </h2>
      <p className="mb-6 text-center">
        For any inquiries, please email <a target='_blank' rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&to=www.aus8970@gmail.com&tf=cm" className="font-semibold"> www.aus8970@gmail.com </a> 
        or contact <a href="https://wa.me/message/7A34EHJ3KL7QB1" className="font-semibold"> +8801979727030 </a>
      </p>

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Lottie Animation */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Lottie animationData={ContactJsonData} loop={true} className="max-w-xs md:max-w-sm lg:max-w-md" />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit(handleSignup)} className="w-full max-w-md mx-auto">
            <div className="grid grid-cols-1 gap-5">
              
              {/* Name */}
              <div>
                <Input
                  placeholder="Enter your name"
                  className="p-2 bg-white rounded-lg ring-1 ring-gray-100 w-full"
                  {...register("name", { required: "Please enter your Name!" })}
                />
                {errors.name && <span className="text-red-500 text-sm">* {errors.name.message}</span>}
              </div>

              {/* Email */}
              <div>
                <Input
                  className="p-2 bg-white rounded-lg ring-1 ring-gray-100 w-full"
                  placeholder="Enter your email"
                  {...register("email", { required: "Please enter your Email!" })}
                />
                {errors.email && <span className="text-red-500 text-sm">* {errors.email.message}</span>}
              </div>

              {/* Message */}
              <div>
                <Textarea
                  className="p-2 h-40 bg-white rounded-lg ring-1 ring-gray-100 w-full"
                  placeholder="Your Message"
                  {...register("message", { required: "Please enter your message!" })}
                />
                {errors.message && <span className="text-red-500 text-sm">* {errors.message.message}</span>}
              </div>
            </div>

            <button type="submit" className="mt-4 bg-[#0B093A] w-full text-white font-medium py-2 rounded-lg hover:bg-[#161353] transition-all">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;