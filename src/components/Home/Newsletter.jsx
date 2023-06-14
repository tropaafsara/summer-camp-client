import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Newsletter = () => {
    return (
        <div className='p-8   text-center '>
            <Slide>
            <h1 className='text-3xl font-bold text-center mb-8'>Subscribe Newsletter</h1>
            </Slide>
            
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium maiores. Possimus sed fugiat amet maxime sint aspernatur fugit sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, animi.</p>
            <div className=''>
            <input className='border border-black rounded-full p-3 w-1/2 mt-6 mb-6' type="text" name="" id="" placeholder='Enter Your Email Address'  />
            <button className='btn rounded-full  ' >Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;