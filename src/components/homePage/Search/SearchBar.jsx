import React from "react";
import { useState } from "react";
import FiltredSearch from "./FiltredSearch";
import "./SearchBar.scss";


function SearchBar() {
    const[inputSearch, setInputSearch] = useState("");

    function handleChange(event) {
        const newInputSearch = event.target.value;
        setInputSearch(newInputSearch);
    }

    return (    
        
        <div className="search-bar__separe">

            <div className="search-bar__container">
                <img className="search-bar__icon" src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="search icon" />
                <input id="search-bar__input" type="search" placeholder="Search..." onChange={handleChange} />
            </div>

            <div className="search-bar__result">
                <FiltredSearch inputSearch={inputSearch} />
            </div>
        </div>

    );
}
export default SearchBar;