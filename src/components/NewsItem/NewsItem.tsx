import formatTimeAgo from "../../helpers/formatTimeAgo.ts";
import classes from "./styles.module.css";

import { INews } from "../../interfaces/index.ts";

interface IProps {
    item: INews;
}

export default function NewsItem({ item }: IProps) {
    return (
        <li className={classes.item}>
            <div
                className={classes.wrapper}
                style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className={classes.info}>
                <h3 className={classes.title}>{item.title}</h3>
                <p className={classes.extra}>
                    {formatTimeAgo(item.published)} · by {item.author}
                </p>
            </div>
        </li>
    );
}
