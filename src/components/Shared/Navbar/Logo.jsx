import { Link } from 'react-router-dom'
// import logoImg from '../../../assets/images/Melody.png'
import logoImg from '../../../assets/images/logo.png'

const Logo = () => {
  return (
    <Link to='/'>
      <div className='flex items-center gap-3'>
      <img
        className='hidden md:block'
        src={logoImg}
        alt='logo'
        width='50'
        height='50'
      />
      <p><span className="text-2xl animation">MELODIA</span></p>
     
      </div>
    </Link>
  )
}

export default Logo