import classes from "./styles.module.css";

import LatestNews from "../../components/LatestNews/LatestNews.tsx";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters.tsx";

export default function Main() {
    return (
        <main className={classes.main}>
            <LatestNews />
            <NewsByFilters />
        </main>
    );
}
