import './Navbar.css';

import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons';

function Navbar(){

  return (
    <>
      <nav className='navbar'>

        <div className="logo">
            <FaLaptopCode/>
            <h2>Tech Monster</h2>
        </div>

        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            <li>
                <Link to={'/about'}>About</Link>
            </li>

            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>

            <li>
                <Link to={'/login'}>Login</Link>
            </li>
            <li>
                <Link to={'/signup'}>Signup</Link>
            </li>
        </ul>
      </nav>
    </>
  )

}

export default Navbar;