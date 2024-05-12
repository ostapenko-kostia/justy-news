import classes from "./styles.module.css";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";

import { TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";

export default function NewsByFilters({ filters, changeFilters, isLoading, news }) {
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
            <NewsFilters filters={filters} changeFilters={changeFilters} />
            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handleSelectPage={handleSelectPage}
                currentPage={filters.page_number}
                totalPages={TOTAL_PAGES}
            />

            <NewsList isLoading={isLoading} news={news} />

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handleSelectPage={handleSelectPage}
                currentPage={filters.page_number}
                totalPages={TOTAL_PAGES}
            />
        </section>
    );
}
