import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../context/Context";

const useNewsQuery = () => {
    const [news, setNews] = useState([]);
    const { category } = useContext(CategoryContext);
    const { searchInput } = useContext(SearchContext);

    useEffect(() => {
        fetch(`http://localhost:8000/v2/top-headlines?category=${category}`)
            .then(res => res.json())
            .then(data => setNews(data?.articles));
    }, [category]);

    useEffect(() => {
        if (searchInput === '') {
            return
        }
        fetch(`http://localhost:8000/v2/search?q=${searchInput}`)
            .then(res => res.json())
            .then(data => setNews(data.result));
    }, [searchInput])

    return [news];
};

export default useNewsQuery;