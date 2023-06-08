import React, { useContext } from 'react'
import { TbFidgetSpinner } from 'react-icons/tb'
import { AuthContext } from '../../providers/AuthProvider';
const AddClassForm = ({
  handleSubmit,
  loading,
  handleImageChange,
  uploadButtonText,
}) => {
    const { user } = useContext(AuthContext);
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Class Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='className'
                id='className'
                type='text'
                placeholder='Class Name'
                required
              />
            </div>

          </div>
          <div className='space-y-6'>
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input onChange={event =>{handleImageChange(event.target.files[0])}}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='guest' className='block text-gray-600'>
                  Total guest
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='seats'
                  id='seats'
                  type='number'
                  placeholder='Available Seats'
                  required
                />
              </div>
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='instructorName' className='block text-gray-600'>
                  Instructor Name
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='instructorName'
                  id='instructorName'
                  type='name'
                  defaultValue={user?.displayName}
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='instructorEmail' className='block text-gray-600'>
                  Instructor Email
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='instructorEmail'
                  id='instructorEmail'
                  type='email'
                  defaultValue={user?.email}
                  required
                />
              </div>
            </div>

            
          </div>
        

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Add a class'
          )}
        </button>
      </form>
    </div>
  )
}

export default AddClassForm