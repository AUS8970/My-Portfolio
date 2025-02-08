import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@material-tailwind/react';

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
    <div id='contact' className="max-w-md mx-auto m-10 p-6 rounded shadow">
      <h2 className="text-4xl font-bold text-gray-800 pb-4 text-center"> Contact Us </h2>
      <p className="mb-4 text-center"> For any of your needs, please email <a target='_blank' href={"https://mail.google.com/mail/u/0/?fs=1&to=www.aus8970@gmail.com&tf=cm"}>   <b> www.aus8970@gmail.com </b> </a> or contact <a href="https://wa.me/message/7A34EHJ3KL7QB1" className=""> <b> +8801979727030 </b></a> </p>
      <form onSubmit={handleSubmit(handleSignup)} className="mb-2">
        <div className="mb-1 grid grid-cols-1 gap-5 max-w-lg">
          {/* Name */}
          <div className="">
            <Input
              placeholder="Enter your name"
              className='p-2 bg-white rounded-lg ring-1 ring-gray-100'
              {...register("name", { required: "Please enter your Name!" })}
            />
            {errors.name && <span className="text-red-500 text-sm">* {errors.name.message}</span>}
          </div>

          {/* Email */}
          <div className="">
            <Input
              className='p-2 bg-white rounded-lg ring-1 ring-gray-100'
              placeholder="Enter your email"
              {...register("email", { required: "Please enter your Email!" })}
            />
            {errors.email && <span className="text-red-500 text-sm">* {errors.email.message}</span>}
          </div>

          {/* Message */}
          <div className="">
            <Textarea
              className='p-2 h-40 bg-white rounded-lg ring-1 ring-gray-100'
              placeholder="Your Message"
              {...register("message", { required: "Please enter your message!" })}
            />
            {errors.message && <span className="text-red-500 text-sm">* {errors.message.message}</span>}
          </div>
        </div>
        
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=www.aus8970@gmail.com&tf=cm" target="_blank" > 
          <Button className="mt-2 bg-[#0B093A] text-base-content font-medium w-full py-2 text-center rounded-lg">
            Send Message
          </Button>
        </a>
      </form>
    </div>
  );
};

export default Contact;