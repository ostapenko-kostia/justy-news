import classes from "./styles.module.css";

import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

import useFetch from "../../helpers/hooks/useFetch";
import useDebounce from "../../helpers/hooks/useDebounce";
import useFilters from "../../helpers/hooks/useFilters";

import { getNews } from "../../api/apiNews";
import { PAGE_SIZE } from "../../constants/constants";

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

    return (
        <main className={classes.main}>
            <LatestNews isLoading={isLoading} banners={data && data.news} />
            <NewsByFilters
                filters={filters}
                changeFilters={changeFilters}
                isLoading={isLoading}
                news={data && data.news}
            />
        </main>
    );
}
