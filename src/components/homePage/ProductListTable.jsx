import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.scss";
function ProductListTable({ products }) {
  return (
    <>
      {products.map((product, i) => (


          <React.Fragment key={i}>
          <tr>
            <td className="products-management__product name" data-label="Product name" key={i}>
              <Link to={"/details/" + product.id}>
                {product.title.length > 30 ? product.title.slice(0, 24) + "..." : product.title}
              </Link>
            </td>
            <td className="products-management__category" data-label="Category">
              <div className={product.category.slice(0, 3)}>
                 {product.category} 
                </div>
            </td>
            <td className="products-management__price" data-label="Price">
              {product.price}€
            </td>
            <td className="products-management__price-tva" data-label="Price (TVA)">
              {Math.round((product.price * 1.2)*100)/100}€
            </td>
          </tr>

        </React.Fragment>
      ))}
    </>
  );
}

export default ProductListTable;

