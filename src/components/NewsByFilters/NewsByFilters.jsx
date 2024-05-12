import classes from "./styles.module.css";

import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import NewsFilters from "../NewsFilters/NewsFilters";

import useFilters from "../../helpers/hooks/useFilters";
import useDebounce from "../../helpers/hooks/useDebounce";
import useFetch from "../../helpers/hooks/useFetch";

import { getNews } from "../../api/apiNews";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants";

export default function NewsByFilters() {
    const { filters, changeFilters } = useFilters({
        page_number: 1,
        pageSize: PAGE_SIZE,
        category: "All",
        keywords: "",
    });

    const { data, isLoading } = useFetch(getNews, {
        ...filters,
        keywords: useDebounce(filters.keywords, 1500),
    });

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
