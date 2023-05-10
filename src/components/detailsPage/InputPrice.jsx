import React, { useState } from "react";
import { useEffect } from "react";

function InputPrice({ onInputChange, priceChange }) {
  const [inputValue, setInputValue] = useState("");
  const [product, setProduct] = useState([]);


  function handleChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  }

    useEffect(() => {   
        fetch('https://fakestoreapi.com/products/' + window.location.pathname.split("/")[2])
            .then(response => response.json())
            .then(data => setProduct(data))
            
    }, [])  

    useEffect (() => {
        setInputValue(product.price)
    }, [product])

  if (priceChange === 0) {
    return (
    <div >
      <input className="static-prix" type="text"  value={inputValue} onChange={handleChange} />  
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

