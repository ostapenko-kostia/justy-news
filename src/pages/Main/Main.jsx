import classes from "./styles.module.css";

import NewsBannerWithSkeleton from "../../components/NewsBanner/NewsBanner";
import NewsListWithSkeleton from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

import useFetch from "../../helpers/hooks/useFetch";
import useDebounce from "../../helpers/hooks/useDebounce";
import useFilters from "../../helpers/hooks/useFilters";

import { getCategories, getNews } from "../../api/apiNews";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants";

export default function Main() {
    const { filters, changeFilters } = useFilters({
        page_number: 1,
        pageSize: PAGE_SIZE,
        category: "All",
        keywords: "",
    });

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const { data, isLoading } = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    });

    const { data: dataCategories } = useFetch(getCategories);

    function handleNextPage() {
        if (filters.page_number < TOTAL_PAGES)
            changeFilters("page_number", filters.page_number + 1);
    }

    function handlePreviousPage() {
        if (filters.page_number > 1) changeFilters("page_number", filters.page_number - 1);
    }

    function handleSelectPage(page) {
        changeFilters("page_number", page);
    }

    return (
        <main className={classes.main}>
            {dataCategories ? (
                <Categories
                    categories={["All", ...dataCategories.categories]}
                    setSelectedCategory={(currentCategory) =>
                        changeFilters("category", currentCategory)
                    }
                    selectedCategory={filters.category}
                />
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilters("keywords", keywords)}
            />

            <NewsBannerWithSkeleton
                isLoading={isLoading}
                item={data && data.news && data.news[0]}
            />

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handleSelectPage={handleSelectPage}
                currentPage={filters.page_number}
                totalPages={TOTAL_PAGES}
            />

            <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handleSelectPage={handleSelectPage}
                currentPage={filters.page_number}
                totalPages={TOTAL_PAGES}
            />
        </main>
    );
}
