import classes from "./styles.module.css";

import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

import useFetch from "../../helpers/hooks/useFetch";

import { getCategories } from "../../api/apiNews";
import Slider from "../Slider/Slider";

export default function NewsFilters({ filters, changeFilters }) {
    const { data: dataCategories } = useFetch(getCategories);

    return (
        <div className={classes.filters}>
            {dataCategories ? (
                <Slider>
                    <Categories
                        categories={["All", ...dataCategories.categories]}
                        setSelectedCategory={(currentCategory) =>
                            changeFilters("category", currentCategory)
                        }
                        selectedCategory={filters.category}
                    />
                </Slider>
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilters("keywords", keywords)}
            />
        </div>
    );
}
