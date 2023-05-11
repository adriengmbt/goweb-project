import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FiltredSearch({ inputSearch }) {
    const [products, setProducts] = useState([]);
    const [filtredProducts, setFiltredProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => setProducts(data));
      }, []);    
    
    useEffect(() => {
        setFiltredProducts( products.filter(product => product.title.toLowerCase().includes(inputSearch.toLowerCase())))
    }, [inputSearch, products])


    if (!inputSearch) {
        return null;
    }


    return (
        console.log(inputSearch),
        console.log(products),
        console.log(filtredProducts),
        <React.Fragment>
            {filtredProducts.map((product, i) => (
                <React.Fragment key={i}>
                   <Link to={"/details/" + product.id} className="search-bar__title" >
                    {product.title.length > 30 ? product.title.slice(0, 24) + "..." : product.title}
                    </Link>
                </React.Fragment>
            ))}
        </React.Fragment>
    )
    
}      
            
export default FiltredSearch;