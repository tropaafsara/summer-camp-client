import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await fetch('https://summer-camp-school-server-peach.vercel.app/classes')
    return res.json()
  })



  const handleApprove = classes =>{
        
    fetch(`https://summer-camp-school-server-peach.vercel.app/classes/approve/${classes._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `You've approved the class !`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}



  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
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
              classes.map((cls, index) =>
                <tr key={cls._id}>
                  <th>
                    {index + 1}
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
                  <td>{cls.status}</td>

                  <td className='flex flex-col gap-2 '>
                    {
                      cls.status=='pending'?<>
                      <button onClick={()=>handleApprove(cls)} className='bg-fuchsia-800 hover:bg-purple-800 rounded p-1 text-white'>Approve</button>
                      <button disabled className='bg-fuchsia-800 hover:bg-purple-800 rounded p-1 text-white'>Deny</button>
                    <button disabled className='bg-fuchsia-800 hover:bg-purple-800 rounded p-1 text-white'> Feedback</button>
                      </>: <>
                      
                      </>
                    }
                    
                    

                  </td>

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