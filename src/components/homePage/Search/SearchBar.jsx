import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import FiltredSearch from "./FiltredSearch";
import '../../../styles/Main.scss';
import { SearchContext } from "./SearchContext";
import { useEffect } from "react";
import { useContext } from "react";

function SearchBar() {
  const {setSearchProducts} = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [inputSize, setInputSize] = useState(isMobile ? { width: "0" } : { width: "10rem" });
  
  function handleChange(event) {
    const newInputSearch = event.target.value;
    setInputSearch(newInputSearch);
  }
  console.log("*" + inputSearch);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);    


  function handleClick() {
    setInputSize({ width: "160px" });
  }
  function handleimg() {
    const results = products.filter((product) =>
    product.title.toLowerCase().includes(inputSearch.toLowerCase())
  );
  setSearchProducts(results);
  }

  const inputStyle = {
    width: inputSize.width
  };

  return (
    <div onClick={handleClick}className={`search-bar ${isMobile ? "mobile" : ""}`}>
      
      <div className="search-bar__container">
        <img
          className="search-bar__icon"
          src="https://img.icons8.com/ios/50/000000/search--v1.png"
          alt="search icon"
          onClick={handleimg}
        />
        <input
          className="search-bar__input"
          type="search"
          placeholder="Search..."
          onChange={handleChange}
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

