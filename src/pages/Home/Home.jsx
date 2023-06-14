import React from 'react';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Banner from '../../components/Home/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;    