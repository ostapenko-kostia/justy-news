import classes from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton";

function NewsList({ news }) {
    return (
        <ul className={classes.list}>
            {news?.map((item) => {
                return <NewsItem key={item.id} item={item} />;
            })}
        </ul>
    );
}

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
