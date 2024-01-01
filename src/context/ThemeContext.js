import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {},
})

export default function useThemeCnr(){
    return useContext(ThemeContext)
}