import { NavLink, useNavigate } from 'react-router-dom'
import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { useContext, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import { becomeHost } from '../../api/auth'
import { toast } from 'react-hot-toast'
import HostModal from '../Modal/HostRequestModal'
const GuestMenu = () => {
  const navigate = useNavigate()
  const {role,user, setRole} = useContext(AuthContext)
  const [modal, setModal] = useState(false);
  const modalHandler = (email) =>{
    becomeHost(email).then(data=>{
      toast.success('You are now an Instructor !')
      setRole('instructor')
      navigate('/dashboard/add-class')
      closeModal()
    })
  }
  const closeModal = ()=>{
    setModal(false);
  }


  return (
    <>
      <NavLink
        to='my-classes'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <BsFingerprint className='w-5 h-5' />

        <span className='mx-4 font-medium'>My Classes</span>
      </NavLink>

      {!role && (<div onClick={()=>setModal(true)} className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
        <GrUserAdmin className='w-5 h-5' />

        <span className='mx-4 font-medium'>Become An Instructor</span>
      </div>)}
      <HostModal isOpen={modal}
      modalHandler={modalHandler}
      email={user?.email}
      closeModal={closeModal}></HostModal>
    </>
  )
}

export default GuestMenu