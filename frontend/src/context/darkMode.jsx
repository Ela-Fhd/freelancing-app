import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const toggleDarkMode = () => setIsDarkMode((s) => !s);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <darkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  const context = useContext(darkModeContext);
  if (context === undefined)
    throw new Error("dark moode context used outside provider!!!");
  return context;
};
