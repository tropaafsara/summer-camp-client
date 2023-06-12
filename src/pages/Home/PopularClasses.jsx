import React, { useEffect, useState } from 'react';

const PopularClasses = () => {


    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-school-server-peach.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                const popularClasses = data.filter(item => item.category === 'popular');
                setClasses(popularClasses)
            })
    }, [])



    return (
        
        <div>
            <h1 className='text-center text-3xl font-bold mb-7'>Popular Classes</h1>
            <hr />
        </div>
    );
};

export default PopularClasses;