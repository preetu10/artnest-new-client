import { createContext, useEffect, useState } from "react";
import {app} from "../firebase/firebase.config.js"
export const AuthContext = createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
       
      };
    return (
         <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;