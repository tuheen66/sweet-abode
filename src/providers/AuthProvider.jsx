/* eslint-disable react/prop-types */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // creating user with email and password

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google signIn

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github sign in

  const githubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  // logout

  const logOut = () => {
    return signOut(auth);
  };


  useEffect(()=>{
    onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
    })
  },[])

  const authInfo = {
    user,
    createUser,
    loginUser,
    googleSignIn,
    githubSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
