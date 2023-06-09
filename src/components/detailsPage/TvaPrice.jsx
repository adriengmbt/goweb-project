import React, {useEffect} from "react";
import { useState } from "react";
import ApiCall from "../api/ApiCall";

function TvaPrice({ priceChange }) {

    const [product, setProduct] = useState([]);

    // Fetching the product data from the API
    useEffect(() => {
        ApiCall()
            .then(data => setProduct(data))
    }, [])
    
    // if the priceChange is equal to 0, we display the price of the product
    if (priceChange === 0) {
    
    return (
    <div className="tva-price">
      <p> Price (including VAT): {product.price * 1.2} € </p>
    </div>
  );
    } else {
        return (
            <div className="tva-price">
                <p> Price (including VAT): {priceChange * 1.2} € </p>
            </div>
        );
}
}

export default TvaPrice;