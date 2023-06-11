import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const {data: users =[], refetch} = useQuery(['users'], async ()=>{
        const res = await fetch('http://localhost:9000/users')
        return res.json()
    })
    

    const handleMakeAdmin = user =>{
        
        fetch(`http://localhost:9000/users/admin/${user._id}`, {
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
                    title: `You've added an Admin !`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user =>{
        
        fetch(`http://localhost:9000/users/instructor/${user._id}`, {
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
                    title: `You've added an Instructor !`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <p>{users.length    }</p>
           




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
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index)=> 
            <tr key={user._id}>
        <th>
            {index+1}
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.email}</div>
            </div>
          </div>
        </td>
        <td>{user.email}
        </td>
        <td>{user.role}</td>
        {/* <td>{user.role == 'admin' ? 'admin' :
        
        <button onClick={()=> handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs">Make Admin</button>
        }</td> */}
        <th>
        {user.role == 'admin' ? 'admin' : user.role === 'Instructor' ? 'Instructor'
   : (<>
        <button onClick={()=> handleMakeAdmin(user)} className="btn btn-ghost btn-xs">Make Admin</button>
        <button onClick={()=> handleMakeInstructor(user)} className="btn btn-ghost btn-xs">Make Instructor</button>
        
        </>)
        
        }
        </th>
      </tr>
            )
      }
      
      
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};

export default ManageUsers;