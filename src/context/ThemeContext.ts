import { createContext, useContext } from "react";

interface IThemeContext {
    isDark: boolean;
    toggleTheme: ()=>void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export default function useTheme() {
    const context = useContext(ThemeContext) 

    if(!context) {
        throw new Error('No Context Provided')
    }

    return context
}
