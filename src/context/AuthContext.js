import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsConnected(!!token);
  }, []);

  const login = () => {
    localStorage.setItem("token", "fake-token-123");
    setIsConnected(true);
    console.log('tu es connecte');
    
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsConnected(false);
    console.log('tu es deconnecte');

  };

  return (
    <AuthContext.Provider value={{ isConnected, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
