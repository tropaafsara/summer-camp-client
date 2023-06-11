import { useContext } from 'react'
import avatarImg from '../../../assets/images/avatar.jpg'
import { AuthContext } from '../../../providers/AuthProvider'

const Avatar = () => {
  const { user } = useContext(AuthContext)
  return (
    <img
      className='rounded-full'
      referrerPolicy='no-referrer'
      src={user && user.photoURL ? user.photoURL : avatarImg}
    
      alt='profile'
      height='40'
      width='40'
    />
  )
}

export default Avatar