import { createContext, useState, useEffect, useContext } from "react";

// Create the context
export const AuthContext = createContext();

// Custom hook (this is what was missing!)
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load stored login from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Login handler
  const login = (username, password) => {
    if (username.trim() === "" || password.trim() === "") {
      return { success: false, message: "Username and password required." };
    }

    const userData = { username };

    localStorage.setItem("authUser", JSON.stringify(userData));

    setUser(userData);
    setIsAuthenticated(true);

    return { success: true };
  };

  // Logout handler
  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
