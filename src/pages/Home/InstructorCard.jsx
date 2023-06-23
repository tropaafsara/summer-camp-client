import React from 'react';

const InstructorCard = ({item}) => {
    const {role, email,name,imageUrl} = item
    return (


<div className="card w-96 bg-base-100 shadow-xl w-300 h-400">
  <figure className="px-10 pt-10">
    <img src={imageUrl} alt="Shoes" className="rounded-xl  w-96 h-96" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> {name}</h2>
    <p>Piano Instructor</p>
    {/* <p>{email}</p> */}
    <div className="card-actions">
      <button className="btn   text-white ">See Classes</button>
    </div>
  </div>
</div>
       
    );
};

export default InstructorCard;