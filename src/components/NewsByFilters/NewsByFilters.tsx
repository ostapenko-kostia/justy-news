import classes from "./styles.module.css";
import NewsList from "../NewsList/NewsList.tsx";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";
import useDebounce from "../../helpers/hooks/useDebounce.ts";
import { useGetNewsQuery } from "../../store/services/newsApi.ts";
import { TOTAL_PAGES } from "../../constants/constants.ts";
import { setFilters } from "../../store/slices/newsSlice.ts";
import { useAppDispatch, useAppSelector } from "../../store/index.ts";

export default function NewsByFilters() {

    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.news.filters);
    const news = useAppSelector((state) => state.news.news);
    const {  isLoading } = useGetNewsQuery({
        ...filters,
        keywords: useDebounce(filters.keywords, 1500),
    });

    function handleNextPage() {
        if (filters.page_number < TOTAL_PAGES)
            dispatch(setFilters({ filter: "page_number", value: filters.page_number + 1 }));
    }
    function handlePreviousPage() {
        if (filters.page_number > 1)
            dispatch(setFilters({ filter: "page_number", value: filters.page_number - 1 }));
    }
    function handleSelectPage(page: number) {
        dispatch(setFilters({ filter: "page_number", value: page }));
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
                <NewsFilters />
                <NewsList isLoading={isLoading} news={news} />
            </PaginationWrapper>
        </section>
    );
}
