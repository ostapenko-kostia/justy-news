import axios from "axios";
import { NewsApiResponse, CategoriesApiResponse, TypeParams } from "../interfaces";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function getNews(params?: TypeParams): Promise<NewsApiResponse> {
    try {
        const { page_number = 1, page_size = 10, category, keywords } = params || {};
        const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return { news: [], page: 1, status: "error" };
    }
}

export async function getLatestNews(): Promise<NewsApiResponse> {
    try {
        const response = await axios.get<NewsApiResponse>(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return { news: [], page: 1, status: "error" };
    }
}

export async function getCategories(): Promise<CategoriesApiResponse> {
    try {
        const response = await axios.get<CategoriesApiResponse>(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return { categories: [], description: "", status: "error" };
    }
}
