import { Routes, Route} from 'react-router-dom';

import Landing from '../pages/Landing/Landing';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Auth/Login/Login';
import Signup from '../pages/Auth/Signup/Signup';
import ForgotPassword from '../pages/Auth/ForgotPassword';


function AppRoutes(){
    return(
        <>
            <Routes>
                
                <Route path='/' element={<Landing />} />

                <Route path='/about' element={<About />} />

                <Route path='/contact' element={<Contact />} />

                <Route path='/login' element={<Login />} />

                <Route path='/signup' element={<Signup />} />

                <Route path='/forgot-password' element={<ForgotPassword />} />

            </Routes>
        </>
    )
}

export default AppRoutes;