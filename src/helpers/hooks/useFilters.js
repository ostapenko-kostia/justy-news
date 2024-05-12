import { useState } from "react";

export default function useFilters(initFilters) {
    const [filters, setFilters] = useState(initFilters);

    function changeFilters(filter, value) {
        setFilters((prev) => {
            return { ...prev, [filter]: value };
        });
    }

    return { filters, changeFilters };
}
