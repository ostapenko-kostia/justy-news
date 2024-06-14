import classes from "./styles.module.css";

import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

import useFetch from "../../helpers/hooks/useFetch.ts";

import { getCategories } from "../../api/apiNews.ts";
import Slider from "../Slider/Slider";

import { CategoriesApiResponse, IFilters } from "../../interfaces/index.ts";
import useTheme from "../../context/ThemeContext.ts";

interface IProps {
    filters: IFilters;
    changeFilters: (key: string, value: string | number | null) => void;
}

export default function NewsFilters({ filters, changeFilters }: IProps) {
    const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);
    const {isDark} = useTheme()

    return (
        <div className={classes.filters}>
            {dataCategories ? (
                <Slider isDark={isDark} step={100}>
                    <Categories
                        categories={["all", ...dataCategories.categories]}
                        setSelectedCategory={(currentCategory) =>
                            changeFilters("category", currentCategory)
                        }
                        selectedCategory={filters.category ? filters.category : "all"}
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
