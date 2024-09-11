import { createContext, useEffect, useState } from "react";
import {app} from "../pages/firebase/firebase.config"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,currentUser=> {
        setUser(currentUser);
        setLoading(false);
      });
      return unsubscribe;
    },[])
    const createUser=(email,password)=>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    const signInWithGoogle = () => {
      setLoading(true);
      // console.log("hi");
      return signInWithPopup(auth, provider);
    };
    const logout = () => {
      setLoading(true);
      return signOut(auth);
    };
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        logout,
      };
      
    return (
         <AuthContext.Provider value={authInfo}>
          {children}
          </AuthContext.Provider>
    );
};

export default AuthProvider;