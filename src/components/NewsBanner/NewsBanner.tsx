import Image from "../Image/Image";
import formatTimeAgo from "../../helpers/formatTimeAgo.ts";
import classes from "./styles.module.css";

import { INews } from "../../interfaces/index.ts";

interface IProps {
    item: INews;
}

export default function NewsBanner({ item }: IProps) {
    return (
        <div className={classes.banner}>
            <Image image={item?.image} />
            <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.extra}>
                {formatTimeAgo(item.published)} · by {item.author}
            </p>
        </div>
    );
}
