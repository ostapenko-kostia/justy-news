import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import classes from "./styles.module.css";
import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";

export default function Main() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response.news);
            } catch (error) {
                console.log(error);
            }
        };

        fetchNews();
    }, []);
    return (
        <main className={classes.main}>
            {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
            <NewsList news={news} />
        </main>
    );
}
