import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Newsletter = () => {
    return (
        <div className='p-8   text-center text-white bg-blue-900'>
          
            <h1 className='text-3xl font-bold text-center mb-8'>Want To Stay Informed?</h1>
           
            
            <p className='text-center'> Sign Up for our newsletter now!</p>
            <div className=''>
            <input className='border border-black rounded-full p-3 w-1/5 mt-6 mb-6 me-3' type="text" name="" id="" placeholder='Enter Your Email Address'  />
            <button className='border rounded-full border-white p-3 ' >Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;