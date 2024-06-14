import BannersListWithSkeleton from "../BannersList/BannersList";
import classes from "./styles.module.css";

import { useGetLatestNewsQuery } from "../../store/services/newsApi.ts";

export default function LatestNews() {
    const {data, isLoading } = useGetLatestNewsQuery({})

    return (
        <section className={classes.section}>
            <h3>Latest News</h3>
            <BannersListWithSkeleton banners={data && data.news} isLoading={isLoading} />
        </section>
    );
}
