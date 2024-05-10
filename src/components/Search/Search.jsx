import classes from "./styles.module.css";

export default function Search({ keywords, setKeywords }) {
    return (
        <div className={classes.search}>
            <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className={classes.input}
                placeholder="Search"
            />
        </div>
    );
}
