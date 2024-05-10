import classes from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";

export default function NewsList(news) {
    const newsArray = news.news;
    return (
        <ul className={classes.list}>
            {newsArray.map((item) => {
                return <NewsItem key={item.id} item={item} />;
            })}
        </ul>
    );
}
