import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

        const storedUser = localStorage.getItem("user");

        if (storedUser) {

            setUser(JSON.parse(storedUser));

            setIsAuthenticated(true);

        }

        setLoading(false);

    }, []);

    const login = (userData) => {

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

        setUser(userData);

        setIsAuthenticated(true);

    };

    const logout = () => {

        localStorage.removeItem("user");

        setUser(null);

        setIsAuthenticated(false);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                setUser,

                loading,

                isAuthenticated,

                login,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;