import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // 1. Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  // 2. Effect to update localStorage and apply the 'dark' class to the <html> tag
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const htmlElement = document.documentElement;
    
    // Use the 'dark' class for Tailwind utility to work
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark'); 
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};