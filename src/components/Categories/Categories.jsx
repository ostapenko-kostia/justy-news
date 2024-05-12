import { forwardRef } from "react";
import classes from "./styles.module.css";

const Categories = forwardRef(({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (
        <div ref={ref} className={classes.categories}>
            {categories.map((category) => {
                return (
                    <button
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? classes.active : classes.item}
                        key={category}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                );
            })}
        </div>
    );
});

Categories.displayName = "Categories";

export default Categories;
