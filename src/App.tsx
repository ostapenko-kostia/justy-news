import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
    const [isDark, setIsDark] = useState<boolean>(true);

    function toggleTheme() {
        setIsDark((prev)=>!prev)
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <div className={`app ${isDark ? "dark" : "light"}`}>
                <Header />
                <div className="container">
                    <Main />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
