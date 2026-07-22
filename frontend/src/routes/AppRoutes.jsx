import { Routes, Route } from 'react-router-dom';

import Landing from "../pages/LandingPages/Landing";


import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ResetPassword from '../pages/Auth/ResetPassword';

import ProtectedRoute from './ProtectedRoute';


import VerifySignupOTP from '../pages/Auth/VerifySignupOTP';
import VerifyResetOTP from '../pages/Auth/VerifyResetOTP';


// Dashboards

import StudentDashboard from "../pages/Dashboard/StudentDashboard";
import EmployerDashboard from "../pages/Dashboard/EmployerDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import CompleteProfile from '../pages/Auth/CompleteProfile/CompleteProfile';



function AppRoutes() {
    return (
        <>
            <Routes>

                <Route path='/' element={<Landing />} />

                <Route path='/login' element={<Login />} />

                <Route path='/signup' element={<Signup />} />

                <Route path='/forgot-password' element={<ForgotPassword />} />

                <Route path="/verify-signup-otp" element={<VerifySignupOTP />} />

                <Route path='/reset-password' element={<ResetPassword />} />

                <Route path="/verify-reset-otp" element={<VerifyResetOTP />} />

                <Route
                    path="/student/dashboard"
                    element={
                        <ProtectedRoute role="student">
                            <StudentDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route

                    path="/employer/dashboard"

                    element={

                        <ProtectedRoute role="employer">

                            <EmployerDashboard />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/admin/dashboard"

                    element={

                        <ProtectedRoute role="admin">

                            <AdminDashboard />

                        </ProtectedRoute>

                    }

                />

                <Route path='/complete-profile' element={<CompleteProfile />} />


            </Routes>
        </>
    )
}

export default AppRoutes;