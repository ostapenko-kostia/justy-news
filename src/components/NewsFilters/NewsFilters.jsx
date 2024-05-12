import classes from "./styles.module.css";

import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

import useFetch from "../../helpers/hooks/useFetch";

import { getCategories } from "../../api/apiNews";

export default function NewsFilters({filters, changeFilters}) {
    const { data: dataCategories } = useFetch(getCategories);

    return (
        <div className={classes.filters}>
            {dataCategories ? (
                <Categories
                    categories={["All", ...dataCategories.categories]}
                    setSelectedCategory={(currentCategory) =>
                        changeFilters("category", currentCategory)
                    }
                    selectedCategory={filters.category}
                />
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilters("keywords", keywords)}
            />
        </div>
    );
}
