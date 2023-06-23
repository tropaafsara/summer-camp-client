import React, { useEffect, useState } from 'react';
import PopularClasses from './PopularClasses';
import Banner from '../../components/Home/Banner';
import InstructorCard from './InstructorCard';
import Newsletter from '../../components/Home/Newsletter';
import MusicInstruments from '../../components/Home/MusicInstruments';
import Accordionn from './Accordion';

const Home = () => {

    const [displayedInstructors, setDisplayedInstructors] = useState([]);


    useEffect(() => {
        fetch('https://summer-camp-school-server-peach.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                const popularInstrtuctors = data.filter(item => item.role === 'instructor');
                setDisplayedInstructors(popularInstrtuctors.slice(0, 6));

            })
    }, [])
    

    return (
        <div>
           
            <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            </div>
           
           <div className='max-w-7xl mx-auto'>
           <PopularClasses></PopularClasses>
           </div>
           
         
           <div className='max-w-7xl mx-auto'>
           <h1 className='title'>Popular Instructors </h1>
          
           
          <hr />
         <div className='grid lg:grid-cols-3 md:grid-cols-2 ms-10 gap-6 mt-8 mb-8'>
         {
              displayedInstructors.map(item=>
                  <InstructorCard
              key={item._id}
              item={item}
              instructors={displayedInstructors}
              ></InstructorCard>
              )
          }
         </div>
           </div>
        <div className='max-w-7xl mx-auto'>
        <MusicInstruments></MusicInstruments>
        </div>
        <h2 className='title'>Frequently Asked Any Questions</h2>
        <Accordionn></Accordionn>
           <Newsletter></Newsletter>
           
           </div>
    );
};

export default Home;    