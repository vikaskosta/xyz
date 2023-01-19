import './navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      
        <div><NavLink className="navlist" to="/">Home</NavLink></div>
        <div><NavLink className="navlist" to="/about">About Us</NavLink></div>
        <div><NavLink className="navlist" to="/contact">Contact Us</NavLink></div>
        <div><NavLink className="navlist" to="/login">Login In</NavLink></div>
      
    </div>
    </>
  )
}

export default Navbar;