import useTheme from "../../context/ThemeContext";
import classes from "./styles.module.css";

export default function ThemeSwitcher() {
    const { isDark, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme} className={classes.button}>
            <img src={isDark ? "/images/light.png" : "/images/dark.png"} alt="Switch theme" />
        </button>
    );
}
