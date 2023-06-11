import React, { useContext, useState } from 'react'
import Container from '../Container'
import Logo from './Logo'
import Avatar from './Avatar'
import { Link, useNavigate } from 'react-router-dom'
import HostModal from '../../Modal/HostRequestModal'
import { AuthContext } from '../../../providers/AuthProvider'
import { becomeHost } from '../../../api/auth'
import { toast } from 'react-hot-toast'

const Navbar = () => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false);
  const {user, logOut, role, setRole} = useContext(AuthContext)
  console.log(role);

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
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
          <Logo />
          <div>Courses</div>
      

      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/classes'>Classes</Link>
      <div className='hidden md:block  '>
          {!role && 
          <button className='cursor-pointer text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition' onClick={()=>setModal(true)}  
          disabled={!user}>Become an Instructor</button>}
        </div>

        {user ? (
              <div
                onClick={()=>{
                  setRole(null)
                  logOut()
                }}
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
              >
                Logout
              </div>
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link>
              </>
            )}
            <Avatar></Avatar>
    </div>
        </Container>
      </div>
      <HostModal isOpen={modal}
      modalHandler={modalHandler}
      email={user?.email}
      closeModal={closeModal}
      ></HostModal>
    </div>
  )
}

export default Navbar