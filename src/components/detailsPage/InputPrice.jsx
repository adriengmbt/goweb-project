import React, { useState } from "react";
import { useEffect } from "react";
import ApiCall from "../api/ApiCall";

function InputPrice({ onInputChange, priceChange }) {
  const [inputValue, setInputValue] = useState("");
  const [product, setProduct] = useState([]);


  // when the input change, we update the state
  function handleChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  }

    // Fetching the product data from the API
    useEffect(() => {  
            ApiCall()
            .then(data => setProduct(data))       
    }, [])  

    useEffect (() => {
        setInputValue(product.price)
    }, [product])

  // if the priceChange is equal to 0, we display the placeholder of the product else we display the priceChange
  if (priceChange === 0) {
    return (
    <div >
      <input aria-label="" className="static-prix" type="text"  value={inputValue} onChange={handleChange} />  
    </div>
  );
}
  else {
    return (
        <div>
          <input className="static-prix" type="text" placeholder={priceChange} value={inputValue} onChange={handleChange} />    
        </div>
        );
  }
}

export default InputPrice;

