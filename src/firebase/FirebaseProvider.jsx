import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "./firebase.config";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  // create user email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login
  const loginWithGoogle = () => {
    console.log("from main func");
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const userInfo = {
    createUser,
    loginUser,
    loginWithGoogle,
    loginWithGithub,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
