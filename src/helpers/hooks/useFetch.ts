import { useState, useEffect } from "react";

interface IFetchFunction<P, T> {
    (params?: P): Promise<T>;
}

interface IUseFetchResult<T> {
    data: T | undefined;
    isLoading: boolean;
    error: Error | null;
}

const useFetch = <T, P>(fetchFunction: IFetchFunction<P, T>, params?: P): IUseFetchResult<T> => {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const stringParams = params ? new URLSearchParams(params.toString()).toString() : "";

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const result = await fetchFunction(params);
                setData(result);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [fetchFunction, stringParams]);

    return { data, isLoading, error };
};

export default useFetch;
