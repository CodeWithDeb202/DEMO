import { createContext, useMemo, useState } from "react";

import { tokenStorage } from "../services/auth/tokenStorage";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [token, setToken] = useState(

        tokenStorage.getToken()

    );

    const [user, setUser] = useState(

        tokenStorage.getUser()

    );

    const login = ({ token, user }) => {

        tokenStorage.setToken(token);

        tokenStorage.setUser(user);

        setToken(token);

        setUser(user);

    };

    const logout = () => {

        tokenStorage.clear();

        setToken(null);

        setUser(null);

    };

    const value = useMemo(() => ({

        token,

        user,

        isAuthenticated: !!token,

        login,

        logout

    }), [token, user]);

    return (

        <AuthContext.Provider value={value}>

            {children}

        </AuthContext.Provider>

    );

}

export default AuthContext;