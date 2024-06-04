/* eslint-disable react/prop-types */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useState } from "react";
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

  const githubSignIn =()=>{
    return signInWithPopup(auth, gitHubProvider)
  }

  const authInfo = {
    user,
    createUser,
    loginUser,
    googleSignIn,
    githubSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
