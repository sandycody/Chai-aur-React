import { createContext, useContext } from "react";

// createContext can contain default value (like variables, methods, states, etc..)
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});
 
export const ThemeProvider = ThemeContext.Provider;

// Custom Hook 
export const useTheme = () => {
    return useContext(ThemeContext);
}