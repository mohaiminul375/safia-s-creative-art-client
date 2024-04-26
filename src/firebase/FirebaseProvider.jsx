import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";
import { auth } from "./firebase.config";
// import { } from "firebase/auth/cordova";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  // create user email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login email and password

  // google login
  const loginWithGoogle = () => {
    console.log("from main func");
    return signInWithPopup(auth, googleProvider);
  };
  const userInfo = {
    createUser,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
