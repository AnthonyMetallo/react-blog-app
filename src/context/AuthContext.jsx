import { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);           // will store username or user object
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
    // Simulated simple validation - replace with real API if needed
    if (username.trim() === "" || password.trim() === "") {
      return { success: false, message: "Username and password required." };
    }

    // Mock success - replace with backend validation if needed
    const userData = { username };

    // Persist login
    localStorage.setItem("authUser", JSON.stringify(userData));

    // Update state
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
