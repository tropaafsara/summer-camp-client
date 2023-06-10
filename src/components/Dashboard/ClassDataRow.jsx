import { toast } from "react-hot-toast";
import { deleteClass } from "../../api/classes";
import DeleteModal from "../Modal/DeleteModal";
import { useState } from "react";

const ClassDataRow = ({ cls,fetchClasses}) => {
    // console.log(cls);
    let [isOpen, setIsOpen] =useState(false)
    function openModal(){
        setIsOpen(true)
    }
    function closeModal(){
        setIsOpen(false)
    }

    const modalHandler = (id)=>{
        deleteClass(id)
            .then(data=>{
                console.log(data);
                fetchClasses()
                toast.success('Class Deleted')
            }).catch(err=>console.log(err))
      
        closeModal()
    }

  return (
   
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={cls?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{cls?.className}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{cls?.instructorName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${cls?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${cls?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${cls?.price}</p>
      </td>
      
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span onClick={openModal} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </span>
        <DeleteModal isOpen={isOpen} closeModal={closeModal} modalHandler={modalHandler} id={cls._id}></DeleteModal>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update</span>
        </span>
      </td>
    </tr>
  )
}

export default ClassDataRow