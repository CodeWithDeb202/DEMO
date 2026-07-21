import './Navbar.css';

import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from './Navbardata';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }


    return (
        <>

            <motion.nav className='navbar' initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                <div navbar-container >
                    <Link to={'/'} className='logo'>
                        {/* Add Logo */}
                        <img src="/assets/logo/logo.png" alt="Tech monster Logo" />

                        <div className='logo-text'>
                            <h2>Tech Monster</h2>
                            <span>Pvt. Ltd.</span>
                        </div>
                    </Link>
                    <div className="toggleBar">
                        <button onClick={() => setIsOpen(true)}>
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>

                    <div>
                        <ul className="navlink">
                            <li>
                                <NavLink to={'/'} end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/signup'}>Sign Up</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

            </motion.nav>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="sideOverlay"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="navSidebar"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                        >
                            <button className="closeBtn" onClick={() => setIsOpen(false)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>

                            <NavLink onClick={() => setIsOpen(false)} to="/">Home</NavLink>
                            <NavLink onClick={() => setIsOpen(false)} to="/about">About</NavLink>
                            <NavLink onClick={() => setIsOpen(false)} to="/contact">Contact</NavLink>
                            <NavLink onClick={() => setIsOpen(false)} to="/signup">Sign Up</NavLink>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>




            <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="navbar-container">

                    {/* <Link to={'/'} className='logo'> */}
                        {/* Add Logo */}
                        {/* <img src="/logo.png" alt="Tech monster Logo" />

                        <div className='logo-text'>
                            <h2>Tech Monster</h2>
                            <span>Pvt. Ltd.</span>
                        </div>
                    </Link> */}

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