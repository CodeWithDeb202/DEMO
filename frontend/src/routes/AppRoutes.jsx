import { Routes, Route} from 'react-router-dom';

import Landing from '../pages/Landing/Landing';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import VerifyOTP from '../pages/Auth/VerifyOTP';
import ResetPassword from '../pages/Auth/ResetPassword';



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

                <Route path='/verify-otp' element={<VerifyOTP />} />

                <Route path='/reset-password' element={<ResetPassword />} />
                

            </Routes>
        </>
    )
}

export default AppRoutes;