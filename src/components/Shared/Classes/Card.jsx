import { useContext, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'
import Swal from 'sweetalert2'
import { getClasses } from '../../../api/classes'
import useClass from '../../../hooks/useClass'

const Card = ({ cls, classData }) => {

  // console.log(classData);
  const { user } = useContext(AuthContext)
  const { className, image, price, instructorName, seats, instructorEmail,totalStudents } = cls;
 const navigate = useNavigate()
  const location = useLocation();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSelectClass = cls => {
    if (seats === 0) {
      setIsButtonDisabled(true);
      return;
    }
    console.log(cls);
     
    if (user && user.email) {
      // const selectedClasses = { classid : cls._id, seats, className, image, price, instructorName, email: user.email,instructorEmail }
      const selectedClasses = { classid : cls._id, seats: parseFloat(cls.seats), className, image, price, instructorName, email: user.email,instructorEmail,totalStudents:0 }
      fetch('https://summer-camp-school-server-peach.vercel.app/selectedClasses', {
      
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(selectedClasses)
      })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
          // refetch(); 
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class Selected, Go to Dashboard',
            showConfirmButton: false,
            timer: 1500
          })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please login select classes',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }


  const cardClassName = `col-span-1 cursor-pointer group p-4 ${seats === 0 ? 'bg-red-300' : ''}`;

  return (

    <div className={cardClassName}>
      {/* <Link to={`/class/${cls._id}`} className='col-span-1 cursor-pointer group'> */}
     
      <div >
        <div className='flex flex-col gap-2 w-full'>
          <div
            className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
          >
            <img
              className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
              src={cls.image}
              alt='Room'
            />
            <div
              className='
            absolute
            top-3
            right-3
          '
            >

            </div>
          </div>
          <div className='text-xl'>{cls.className}</div>
          <div className='font-semibold'>Instructor: {cls.instructorName}</div>
          <div className='font-light text-neutral-500'>
            Available seats: {cls.seats}
          </div>
          <div className='font-light text-neutral-500'>
            Total students: {cls.totalStudents}
          </div>
          <div className=''>
            <div className='font-semibold'>$ {cls.price}</div>

          </div>
          
        </div>
        <div className="flex justify-end">
        <button onClick={() => handleSelectClass(cls)} className='rounded bg-slate-600 text-white px-3 flex justify-center '>select</button>
    
        </div>
      </div>
      {/* <button onClick={() => handleSelectClass(cls)} className='rounded bg-slate-600 text-white px-2 flex justify-center '>select</button> */}
    
    </div>
  )
}

export default Card