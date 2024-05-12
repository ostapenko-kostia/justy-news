import Image from "../Image/Image";
import formatTimeAgo from "../../helpers/formatTimeAgo";
import classes from "./styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";

function NewsBanner({ item }) {
    return (
        <div className={classes.banner}>
            <Image image={item?.image} />
            <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.extra}>
                {formatTimeAgo(item.published)} · by {item.author}
            </p>
        </div>
    );
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1)

export default NewsBannerWithSkeleton;
