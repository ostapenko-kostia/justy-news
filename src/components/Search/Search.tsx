import classes from "./styles.module.css";

interface IProps {
    keywords: string;
    setKeywords: (keywords: string) => void;
}

export default function Search({ keywords, setKeywords } : IProps) {
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
