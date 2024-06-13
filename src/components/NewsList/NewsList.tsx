import classes from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import { INews } from "../../interfaces/index.ts";

interface IProps {
    news?: INews[];
}

function NewsList({ news }: IProps) {
    return (
        <ul className={classes.list}>
            {news?.map((item) => {
                return <NewsItem key={item.id} item={item} />;
            })}
        </ul>
    );
}

const NewsListWithSkeleton = withSkeleton<IProps>(NewsList, "item", 10);

export default NewsListWithSkeleton;
