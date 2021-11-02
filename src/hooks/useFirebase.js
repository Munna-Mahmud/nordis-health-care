import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication()
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGithub = () => {

        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);

            })
            .finally(() => setIsLoading(false));

    }

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);

    }

    //  it will be obserbe the state change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInUsingGithub
    }
}

export default useFirebase;