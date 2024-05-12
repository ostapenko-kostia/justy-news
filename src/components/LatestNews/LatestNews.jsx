import BannersListWithSkeleton from "../BannersList/BannersList";
import classes from "./styles.module.css";

import useFetch from "../../helpers/hooks/useFetch";
import { getLatestNews } from "../../api/apiNews";

export default function LatestNews() {
    const { data, isLoading } = useFetch(getLatestNews);

    return (
        <section className={classes.section}>
            <h3>Latest News</h3>
            <BannersListWithSkeleton banners={data && data.news} isLoading={isLoading} />
        </section>
    );
}
