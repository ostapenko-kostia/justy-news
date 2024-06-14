import classes from "./styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import NewsBanner from "../../components/NewsBanner/NewsBanner.tsx";

import { INews } from "../../interfaces/index.ts";

interface IProps {
    banners?: INews[];
}

function BannersList({ banners }: IProps) {
    
    return (
        <ul className={classes.banners}>
            {banners?.map((banner: INews) => {
                return <NewsBanner key={banner.id} item={banner} />;
            })}
        </ul>
    );
}

const BannersListWithSkeleton = withSkeleton<IProps>(BannersList, "banner", 8, "row");

export default BannersListWithSkeleton;
