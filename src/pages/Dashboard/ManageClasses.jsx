import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageClasses = () => {
    const {data: classes =[], refetch} = useQuery(['classes'], async ()=>{
        const res = await fetch('https://summer-camp-school-server-peach.vercel.app/classes')
        return res.json()
    })
    return (
        <div>
            <h1>Manage Classes {classes.length}</h1>



            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Instructor Email</th>
        <th>Price</th>
        <th>Available Seats</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        classes.map((cls,index)=> 
            <tr key={cls._id}>
        <th>
            {index+1}
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="">
              <div className="mask  w-24 h-24">
                <img src={cls.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{cls.className}</div>
            </div>
          </div>
        </td>
        <td>{cls.instructorName}
        </td>
        <td>{cls.instructorEmail}</td>
        <td>${cls.price}</td>
        <td>{cls.seats}</td>
        <td>{cls.seats}</td>
        <td>Pending</td>
        <td><button>Approve</button></td>
        
      </tr>
            )
      }
      
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default ManageClasses;