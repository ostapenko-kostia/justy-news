import classes from "./styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../../components/NewsBanner/NewsBanner";

function BannersList({ banners }) {
    return (
        <ul className={classes.banners}>
            {banners?.map((banner) => {
                return <NewsBanner key={banner.id} item={banner} />;
            })}
        </ul>
    );
}

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 8, "row");

export default BannersListWithSkeleton;
