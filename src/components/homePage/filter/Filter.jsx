import React, { useState } from "react";
import "./Filter.scss";

function Filter({ handleFilterProducts}) {
  const [order, setOrder] = useState("default"); 
  const [priceRangeMax, setPriceRangeMax] = useState(1000);
  const [priceRangeMin, setPriceRangeMin] = useState(0);
  const [category, setCategory] = useState("");
  const [isOpened, setIsOpened] = useState(false);



  const handleFilterClick = () => {
    handleFilterProducts(category, priceRangeMax, priceRangeMin, order);
    setIsOpened(false);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceRangeChangeMax = (event) => {
    setPriceRangeMax(event.target.value);
  };

  const handlePriceRangeChangeMin = (event) => {
    setPriceRangeMin(event.target.value);
  };
  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };
  const getProgressStyle = () => {
    const progressRight = (priceRangeMax / 1000) * 100;
    const progressLeft = (priceRangeMin / 1000) * 100;
    return {
      right : `${100-progressRight}%`,
      left: `${progressLeft}%`,
    };
  };
  

  return isOpened ?(
  <div className="filter">

    <div className="filter__close">
      <p onClick={() => setIsOpened(false)}>X</p>
    </div>

    <div className="filter__category">
      <label className="label-category" htmlFor="category">Category</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
  </div>

    <div className="filter__price-range-slider">
      <div className="price-content">
        <div className="span-price">
          <span>Price</span>
        </div>
        <div className="price-content__title">
        <div>
          <span>{priceRangeMin} EUR</span>
        </div>

        <div>
          <span>{priceRangeMax} EUR</span>
        </div>
      </div>

      <div class="slider-container">
        <div class="slider">
              <div className="progress" style={getProgressStyle()}></div>
          </div>
        <div className="range-input">

          <input type="range" id="price-range-sliderLeft" name="price-range-slider" min="0" max="1000" value= {priceRangeMin} onChange={handlePriceRangeChangeMin} step="10" />
          <input type="range" id="price-range-sliderRight" name="price-range-slider" min="0" max="1000" value={priceRangeMax} onChange={handlePriceRangeChangeMax} step="10" />
        </div>
      </div>
    </div>
  </div>

  <div className="filter__price-order">
      <label className="label-price" htmlFor="price">Order by price</label>
        <select id="price" value={order} onChange={handleOrderChange}>
          <option value="default">Default</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
  </div>

  <div className="filter__button-container">
    <button className="filter__button" onClick={handleFilterClick} 
    >Filter</button>
  </div>
</div>

  ) : (
    <div className="filter__open">
<img onClick={() => setIsOpened(true)} width="64" height="64" src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/000000/external-setting-interface-a1-creatype-outline-colourcreatype.png" alt="external-setting-interface-a1-creatype-outline-colourcreatype"/>    
<p onClick={() => setIsOpened(true)}>Filter</p>
  </div>
  );
}

export default Filter;

