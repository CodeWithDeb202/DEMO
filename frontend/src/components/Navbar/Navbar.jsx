import './Navbar.css';

import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from './Navbardata';

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }


  return (
    <>
      <motion.header className='navbar' initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="navbar-container">

            <Link to={'/'} className='logo'>
                {/* Add Logo */}
                <img src="/logo.png" alt="Tech monster Logo" />

                <div className='logo-text'>
                    <h2>Tech Monster</h2>
                    <span>Pvt. Ltd.</span>
                </div>
            </Link>

            <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>

                {navLinks.map((item) => {
                    <NavLink key={item.id} to={item.path} onClick={closeMenu} className={({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                    }>
                        {item.title}
                    </NavLink>
                })}

                <div className="auth-buttons">

                    <Link to={'/login'} className='login-btn' onClick={closeMenu}>Login</Link>

                    <Link to={'/signup'} className='signup-btn' onClick={closeMenu}>Sign Up</Link>

                </div>

            </nav>

            <button className='menu-btn' onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>


        </div>
      </motion.header>
    </>
  )

}

export default Navbar;