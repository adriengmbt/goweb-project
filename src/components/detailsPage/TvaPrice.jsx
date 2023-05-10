import React, {useEffect} from "react";

function TvaPrice({ priceChange }) {

    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + window.location.pathname.split("/")[2])
            .then(response => response.json())
            .then(data => setProduct(data))

    }, [])

    if (priceChange === 0) {
    
    return (
    <div className="tva-update">
      <p> Price (including VAT): {product.price * 1.2} € </p>
    </div>
  );
    } else {
        return (
            <div className="tva-update">
                <p> Price (including VAT): {priceChange * 1.2} € </p>
            </div>
        );
}
}

export default TvaPrice;