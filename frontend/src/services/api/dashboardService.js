import api from "./axios";

// =======================================
// Student Dashboard
// =======================================

export const getStudentDashboard = async () => {

    try {

        const { data } = await api.get(

            "/dashboard/student"

        );

        return data;

    }

    catch (error) {

        console.error(

            "Student Dashboard Error:",

            error.response?.data ||

            error.message

        );

        throw error;

    }

};

// =======================================
// Employer Dashboard
// =======================================

export const getEmployerDashboard = async () => {

    try {

        const { data } = await api.get(

            "/dashboard/employer"

        );

        return data;

    }

    catch (error) {

        console.error(

            "Employer Dashboard Error:",

            error.response?.data ||

            error.message

        );

        throw error;

    }

};

// =======================================
// Admin Dashboard
// =======================================

export const getAdminDashboard = async () => {

    try {

        const { data } = await api.get(

            "/dashboard/admin"

        );

        return data;

    }

    catch (error) {

        console.error(

            "Admin Dashboard Error:",

            error.response?.data ||

            error.message

        );

        throw error;

    }

};