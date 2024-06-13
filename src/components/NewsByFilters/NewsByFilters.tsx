import classes from "./styles.module.css";

import NewsList from "../NewsList/NewsList.tsx";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";

import useFilters from "../../helpers/hooks/useFilters.ts";
import useDebounce from "../../helpers/hooks/useDebounce.ts";
import useFetch from "../../helpers/hooks/useFetch.ts";

import { getNews } from "../../api/apiNews.ts";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants.ts";
import { NewsApiResponse, TypeParams } from "../../interfaces/index.ts";

export default function NewsByFilters() {
    const { filters, changeFilters } = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: "",
    });

    const { data, isLoading } = useFetch<NewsApiResponse, TypeParams>(getNews, {
        ...filters,
        keywords: useDebounce(filters.keywords, 1500),
    });

    function handleNextPage() {
        if (filters.page_number < TOTAL_PAGES) changeFilters("page_number", filters.page_number + 1);
    }

    function handlePreviousPage() {
        if (filters.page_number > 1) changeFilters("page_number", filters.page_number - 1);
    }

    function handleSelectPage(page: number) {
        changeFilters("page_number", page);
    }

    return (
        <section className={classes.section}>
            <h3>All News</h3>
            <PaginationWrapper
                top
                bottom
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handleSelectPage={handleSelectPage}
                currentPage={filters.page_number}
                totalPages={TOTAL_PAGES}
            >
                <NewsFilters filters={filters} changeFilters={changeFilters} />
                <NewsList isLoading={isLoading} news={data && data.news} />
            </PaginationWrapper>
        </section>
    );
}
