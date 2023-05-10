import React, { useState } from "react";
import InputPrice from "./InputPrice";
import TvaPrice from "./TvaPrice";
import ButtonPrice from "./ButtonPrice";

function VueUpdatePrice() {
  const [inputValue, setInputValue] = useState("");
  const [isPriceModified, setIsPriceModified] = useState(false);
  const [id ] = useState(window.location.pathname.split("/")[2]);
  const [updatePrice, setUpdatePrice] = useState(0);

  function handleInputChange(newValue) {
    setInputValue(newValue);
    setIsPriceModified(true);
  }

    function handleUpdateProduct() {
        fetch(`https://fakestoreapi.com/products/` + id , {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            { 
              price: inputValue }
          ),
        })
          .then(response => response.json())
          .then(data => {
            console.log("Product updated:", data);
            setUpdatePrice(data.price);
            setIsPriceModified(false);
            localStorage.setItem("price", data.price);
          })
          .catch(error => {
            console.error("Error updating product:", error);

          });          

      } 


  return (
    <div className="products-details__price__container">

        <div className="products-details__price__vue-price">

          <div>
            <h3 id="price">Price </h3>

          </div>


          <div className="static-prix-and-sigle">  
              <InputPrice onInputChange={handleInputChange} priceChange={updatePrice} />
          </div>

        </div>

        <div className="button-and-VAT"> 
          <ButtonPrice onClick={handleUpdateProduct} disabled= {!isPriceModified} />
            <TvaPrice priceChange={updatePrice} />
        </div>



    </div>


  );
}

export default VueUpdatePrice;

