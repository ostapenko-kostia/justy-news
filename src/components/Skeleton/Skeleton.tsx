import { TypeDirection, TypeSkeleton } from "../../interfaces";
import classes from "./styles.module.css";

interface IProps {
    count?: number;
    type?: TypeSkeleton;
    direction?: TypeDirection;
}

export default function Skeleton({ count = 1, type = "banner", direction = "column" }: IProps) {
    return (
        <>
            {count > 1 ? (
                <ul className={direction === "column" ? classes.columnList : classes.rowList}>
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
