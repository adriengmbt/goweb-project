import React, { useEffect, useState } from "react";
import Barleft from "../../components/Menu";
import ProductListTable from "../../components/homePage/ProductListTable";
import Pagination from "../homePage/Pagination";

function Home() {
  const [products, setProducts] = useState([]);
  // User is actually on this page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of products per page   
  const productsPerPage = 6;
  // Get index of last product
  const indexOfLastProduct = currentPage * productsPerPage;
    // Get index of first product
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // Record current products
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct ) ;
    const nPages = Math.ceil(products.length / productsPerPage);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

    


  return (
    <>
      <div className="nav-bar">
        <Barleft />
      </div>
      <div className="products-management">
        <table className="products-management__table">
          <caption>Products management</caption>
          <thead className="products-management__colonne-product">
            <tr>
              <th scope="col">Product name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Price (including VAT)</th>
            </tr>
          </thead>
            <tbody>
          <ProductListTable products={currentProducts} />
            </tbody>
        </table>
        <div className="pagination">
            <Pagination totalPagesNum={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />      
        </div>
      </div>
    </>
  );
}

export default Home;
