import useTheme from "../../context/ThemeContext.ts";
import formatDate from "../../helpers/formatDate.ts";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.tsx";
import classes from "./styles.module.css";

export default function Header() {
    const {isDark} = useTheme()
    return (
        <header className={`${classes.header} ${isDark ? classes.dark : classes.light}`}>
            <div className={classes.headerWrapper}>
                <h1 className={classes.title}>Justy-News</h1>
                <p className={classes.date}>{formatDate(new Date())}</p>
            </div>
            <ThemeSwitcher />
        </header>
    );
}
