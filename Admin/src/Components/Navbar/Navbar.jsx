import './Navbar.css'
import nav_logo from '../../assets/Admin_Assets/nav-logo.svg'
import nav_profile from '../../assets/Admin_Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className="nav-logo" src={nav_logo} alt="nav_logo"/>
      <img className="nav-profile" src={nav_profile} alt="nav-profile"/>
    </div>
  )
}

export default Navbar