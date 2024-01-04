import React, {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  function login(user) {
    return setUser(user);
  }

  function logout() {
    return setUser({});
  }

  return(
      <AuthContext.Provider value={{user, login, logout}}>
        {children}
      </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}
