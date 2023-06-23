import React from 'react';

const InstructorCard = ({item}) => {
    const {role, email,name,imageUrl} = item
    return (







<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-[400px] ' src={imageUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {name}
    </h2>
    <div className='flex items-center gap-6'>
    <div className="card-actions justify-start">
      <div className="badge badge-outline">Piano</div> 
      <div className="badge badge-outline">Violin</div>
      <div className="badge badge-outline">Vocal</div>
      
    </div>
    <div className="card-actions">
      <button className="btn   text-white ">See Classes</button>
    </div>
    </div>
  </div>
</div>
       
    );
};

export default InstructorCard;