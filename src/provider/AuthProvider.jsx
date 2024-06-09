import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);

    const createSignUpUsers = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUsers = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const usersLogOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('Observe the users', currentUser);
            setUsers(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        users,
        loading,
        createSignUpUsers,
        signInUsers,
        usersLogOut
    }

    return (
        <AuthContext. Provider value={authInfo}>
            {children}
        </AuthContext. Provider>
    );
};

export default AuthProvider;