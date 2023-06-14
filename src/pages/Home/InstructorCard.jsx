import React from 'react';

const InstructorCard = ({item}) => {
    const {role, email,name,imageUrl} = item
    return (
        // <div className="flex space-x-2">
        //     <img className="w-1/2" src={imageUrl} alt="" />
        //     <div>
        //         {/* <h3 className="uppercase">{name}----------</h3> */}
        //         <p>{name}</p>
        //         <p>{email}</p>
        //     </div>
        //     <p className="text-yellow-500">{role}</p>
        // </div>


<div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={imageUrl} alt="Shoes" className="rounded-xl  w-80 " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Instructor Name : {name}</h2>
    <p>{email}</p>
    <div className="card-actions">
      <button className="btn  bg-fuchsia-800 hover:bg-purple-800 text-white ">See Classes</button>
    </div>
  </div>
</div>
       
    );
};

export default InstructorCard;