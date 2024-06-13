import BannersListWithSkeleton from "../BannersList/BannersList";
import classes from "./styles.module.css";

import useFetch from "../../helpers/hooks/useFetch.ts";
import { getLatestNews } from "../../api/apiNews.ts";
import { NewsApiResponse } from "../../interfaces/index.ts";

export default function LatestNews() {
    const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

    return (
        <section className={classes.section}>
            <h3>Latest News</h3>
            <BannersListWithSkeleton banners={data && data.news} isLoading={isLoading} />
        </section>
    );
}
