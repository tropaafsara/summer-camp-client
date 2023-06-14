import React, { useEffect, useState } from 'react';
import PopularClasses from './PopularClasses';
import Banner from '../../components/Home/Banner';
import InstructorCard from './InstructorCard';


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
            <Banner></Banner>
           <PopularClasses></PopularClasses>
           <h1 className='text-center text-3xl font-bold mb-7 mt-8'>Popular Instructors </h1>
            <hr />
           <div className='grid lg:grid-cols-3 md:grid-cols-2 ms-10 gap-6 mt-8 mb-8'>
           {
                displayedInstructors.map(item=><InstructorCard
                key={item._id}
                item={item}
                instructors={displayedInstructors}
                ></InstructorCard>)
            }
           </div>
        </div>
    );
};

export default Home;    