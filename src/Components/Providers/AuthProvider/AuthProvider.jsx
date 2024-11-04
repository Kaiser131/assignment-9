import { createContext } from "react";
import auth from '../../FIREBASE/firebase.config.js';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {


    const register = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);

    };


    const AuthInfo = { register };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;