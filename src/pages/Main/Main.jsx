import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Categories from "../../components/Categories/Categories";
import classes from "./styles.module.css";
import { useEffect, useState } from "react";
import { getCategories, getNews } from "../../api/apiNews";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import useDebounce from '../../helpers/hooks/useDebounce'

export default function Main() {
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [keywords, setKeywords] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const pageSize = 10;

    const debouncedKeywords = useDebounce(keywords, 1500)

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews({
                page_number: currentPage,
                pageSize,
                category: selectedCategory === "All" ? null : selectedCategory,
                keywords: debouncedKeywords
            });
            setNews(response.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(["All", ...response.categories]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage, selectedCategory, debouncedKeywords]);

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
            <Categories
                categories={categories}
                setSelectedCategory={(currentCategory) => setSelectedCategory(currentCategory)}
                selectedCategory={selectedCategory}
            />

            <Search keywords={keywords} setKeywords={setKeywords}/>

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
