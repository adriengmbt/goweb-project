import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import FiltredSearch from "./FiltredSearch";
import "./SearchBar.scss";

function SearchBar() {
  const [inputSearch, setInputSearch] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [inputSize, setInputSize] = useState(isMobile ? { width: "0" } : { width: "150px" });

  function handleChange(event) {
    const newInputSearch = event.target.value;
    setInputSearch(newInputSearch);
  }

  function handleClick() {
    setInputSize({ width: "160px" });
  }

  const inputStyle = {
    width: inputSize.width
  };

  return (
    <div className={`search-bar__separe ${isMobile ? "mobile" : ""}`}>
      <div className="search-bar__container">
        <img
          className="search-bar__icon"
          src="https://img.icons8.com/ios/50/000000/search--v1.png"
          alt="search icon"
        />
        <input
          id="search-bar__input"
          type="search"
          placeholder="Search..."
          onChange={handleChange}
          onClick={handleClick}
          style={inputStyle}
        />
      </div>
      <div className="search-bar__result">
        <FiltredSearch inputSearch={inputSearch} />
      </div>
    </div>
  );
}

export default SearchBar;

