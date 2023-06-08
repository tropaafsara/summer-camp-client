import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'

const Card = ({ cls, classData }) => {
 
  console.log(classData);




  return (
   
    <Link to={`/class/${cls._id}`} className='col-span-1 cursor-pointer group'>
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
        <div className=''>
          <div className='font-semibold'>$ {cls.price}</div>
          {/* <button onClick={()=>setIsOpen(true)} disabled={classData?.instructor?.email === user?.email} className='btn'>select</button> */}
          
        </div>
        {/* <BookingModal isOpen={isOpen}></BookingModal> */}
      </div>
    </Link>
  )
}

export default Card