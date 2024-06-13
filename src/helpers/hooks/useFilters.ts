import { useState } from "react";
import { IFilters } from "../../interfaces";

export default function useFilters(initFilters: IFilters) {
    const [filters, setFilters] = useState<IFilters>(initFilters);

    function changeFilters(filter: string, value: string | null | number) {
        setFilters((prev) => {
            return { ...prev, [filter]: value };
        });
    }

    return { filters, changeFilters };
}

