import BannersListWithSkeleton from "../BannersList/BannersList";
import classes from "./styles.module.css";

export default function LatestNews({ banners, isLoading }) {
    return (
        <section className={classes.section}>
            <BannersListWithSkeleton banners={banners} isLoading={isLoading} />
        </section>
    );
}
