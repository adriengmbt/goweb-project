import React from "react";
import { Link } from "react-router-dom";
import '../../../styles/Main.scss';

function ProductListTable({ products }) {
  return (
    <>
      {products.map((product, i) => (


          <React.Fragment key={i}>
          <tr className="products-management__table-tr">
            <td className="products-management__table-td" data-label="Product name" key={i}>
              <Link to={"/details/" + product.id} className="products-management__table-link">
                {product.title.length > 30 ? product.title.slice(0, 24) + "..." : product.title}
              </Link>
            </td>
            <td className="products-management__table-td" data-label="Category">
              <div className={product.category.slice(0, 3)}>
                 {product.category} 
                </div>
            </td>
            <td className="products-management__table-td" data-label="Price">
              {product.price}€
            </td>
            <td className="products-management__table-td" data-label="Price (TVA)">
              <div className="products-management__table-price-tva-label">
              {Math.round((product.price * 1.2)*100)/100}€
              </div>
            </td>
          </tr>

        </React.Fragment>
      ))}
    </>
  );
}

export default ProductListTable;

