import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const socialLogin = () => {
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth State Changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    const usrInfo = {
        loading,
        createUser,
        signIn,
        user,
        signOutUser,
        socialLogin

    }
    return (
        <AuthContext value={usrInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;