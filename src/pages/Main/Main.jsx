import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import classes from "./styles.module.css";
import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";

export default function Main() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true)
                const response = await getNews();
                setNews(response.news);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        };

        fetchNews();
    }, []);
    return (
        <main className={classes.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton type={"banner"} count={1} />
            )}
            {!isLoading ? <NewsList news={news} /> : <Skeleton type={"item"} count={10} />}
        </main>
    );
}
