import classes from "./styles.module.css";

export default function Skeleton({ count = 1, type = "banner", direction = "column" }) {
    return (
        <>
            {count > 1 ? (
                <ul className={direction === "column" ? classes.columnList : classes.rowList    }>
                    {[...Array(count)].map((_, index) => (
                        <li
                            key={index}
                            className={type === "banner" ? classes.banner : classes.item}
                        ></li>
                    ))}
                </ul>
            ) : (
                <li className={type === "banner" ? classes.banner : classes.item}></li>
            )}
        </>
    );
}
