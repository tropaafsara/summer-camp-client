import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-school-server-peach.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                const popularInstrtuctors = data.filter(item => item.role === 'instructor');
                setInstructors(popularInstrtuctors)
            })
    }, [])
    return (
        
        <div>
            <h1 className='text-center text-3xl font-bold mb-7'>Popular Instructors </h1>
            <hr />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 ms-10 gap-6'>
            {
                instructors.map(item=><InstructorCard
                key={item._id}
                item={item}
                ></InstructorCard>)
            }
            
        </div>
        </div>
    );
};

export default PopularInstructors;