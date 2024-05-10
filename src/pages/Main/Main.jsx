import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import classes from "./styles.module.css";
import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import Pagination from "../../components/Pagination/Pagination";

export default function Main() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews(currentPage, pageSize);
            setNews(response.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage]);

    function handleNextPage() {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }

    function handlePreviousPage() {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    function handleSelectPage(page) {
        setCurrentPage(page);
    }

    return (
        <main className={classes.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton type={"banner"} count={1} />
            )}

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handleSelectPage={handleSelectPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />

            {!isLoading ? <NewsList news={news} /> : <Skeleton type={"item"} count={10} />}

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handleSelectPage={handleSelectPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </main>
    );
}
