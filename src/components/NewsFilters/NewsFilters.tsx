import classes from "./styles.module.css";

import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

import Slider from "../Slider/Slider";

import useTheme from "../../context/ThemeContext.ts";
import { useGetCategoriesQuery } from "../../store/services/newsApi.ts";
import { useAppDispatch, useAppSelector } from "../../store/index.ts";
import { setFilters } from "../../store/slices/newsSlice.ts";

export default function NewsFilters() {
    const { data: dataCategories } = useGetCategoriesQuery({});
    const { isDark } = useTheme();

    const filters = useAppSelector((state) => state.news.filters);
    const dispatch = useAppDispatch();

    return (
        <div className={classes.filters}>
            {dataCategories ? (
                <Slider isDark={isDark} step={100}>
                    <Categories
                        categories={["all", ...dataCategories.categories]}
                        setSelectedCategory={(currentCategory) =>
                            dispatch(setFilters({ filter: "category", value: currentCategory }))
                        }
                        selectedCategory={filters.category ? filters.category : "all"}
                    />
                </Slider>
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) =>
                    dispatch(setFilters({ filter: "keywords", value: keywords }))
                }
            />
        </div>
    );
}
