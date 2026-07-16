import './Navbar.css';

import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);


  return (
    <>
      <header className='navbar'>
        <div className="container">

            <Link to={'/'} className='logo'>
                {/* Add Logo */}
                <img src="/logo.png" alt="Tech monster Logo" />

                <div>
                    <h2>Tech Monster</h2>
                    <span>Pvt. Ltd.</span>
                </div>
            </Link>

            <nav className={menuOpen ? 'nav active' : 'nav'}>

                <NavLink to={'/'} onClick={closeMenu}>Home</NavLink>
                <NavLink to={'/about'} onClick={closeMenu}>About</NavLink>
                <NavLink to={'/contact'} onClick={closeMenu}>Contact</NavLink>
                <NavLink to={'/login'} onClick={closeMenu}>Login</NavLink>
                
                <Link to={'/signup'} className='signup-btn' onClick={closeMenu}>
                    Sign Up
                </Link>
            </nav>

            <button className='menu-btn' onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>


        </div>
      </header>
    </>
  )

}

export default Navbar;