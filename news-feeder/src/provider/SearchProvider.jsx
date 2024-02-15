import { useState } from "react";
import { SearchContext } from "../context/Context";

const SearchProvider = ({ children }) => {
    const [searchInput, setSearchInput] = useState('');

    return (
        <SearchContext.Provider value={{ searchInput, setSearchInput }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;