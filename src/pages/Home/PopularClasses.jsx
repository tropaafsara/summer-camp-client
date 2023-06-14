import React, { useEffect, useState } from 'react';
import Card from '../../components/Shared/Classes/Card';

const PopularClasses = () => {


    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-school-server-peach.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                const popularClasses = data.filter(item => item.totalStudents);
                const sortedClasses = popularClasses.sort((a, b) => b.totalStudents - a.totalStudents);
                setClasses(popularClasses)
            })
    }, [])



    return (
        
        <div>
            <h1 className='text-center text-3xl font-bold mb-7 mt-8'>Popular Classes</h1>
            <hr />
            
            <div className='grid lg:grid-cols-4 md:grid-cols-2 ms-10 gap-6 mt-8 '>
            {classes.slice(0, 4).map(cls=><Card
                key={cls._id}
                cls={cls}
                classes={classes}
                ></Card>)}
            </div>
            
            
        </div>
    );
};

export default PopularClasses;