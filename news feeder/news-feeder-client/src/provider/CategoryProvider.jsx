import { useState } from "react";
import { CategoryContext } from "../context/Context";

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState('');

    return (
        <CategoryContext.Provider
            value={{ category, setCategory }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;