import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const Educations = () => {
  return (
    <div id='educations' className='py-20 text-center bg-gray-100'>
      <h2 className="text-4xl font-bold text-gray-800 pb-5"> Educations </h2>
      <div className="container mx-auto grid md:grid-cols-2 gap-5 px-10">
        <Card className="hover:shadow-lg hover:shadow-black mb-5 py-5">
          <CardBody className='flex flex-col items-center'>
            <Typography variant="h5" className=" text-gray-800">
              Diploma in Homeopathy <small> 2nd Year <i> Running </i> </small>
            </Typography>
            <Typography className='flex gap-1'>
              <span className='hidden lg:flex justify-center'> Khagrachari </span> HM Hill Homeopathic Medical College & Hospital.
            </Typography>
            <Typography className='flex gap-1'>
              Khagrachari, Chittagong, Bangladesh.
            </Typography>
          </CardBody>
        </Card>
        <Card className="hover:shadow-lg hover:shadow-black mb-5 py-5">
          <CardBody>
            <Typography variant="h5" className="text-gray-800">
              Intermediate <small> 2nd Year <i> Running </i> </small>
            </Typography>
            <Typography>
              Matiranga Islamia Alim Madrasha. <br />
              Matiranga, Khagrachari, Bangladesh.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Educations;