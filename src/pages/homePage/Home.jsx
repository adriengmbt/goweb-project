import React, { useEffect, useState } from "react";
import Barleft from "../../components/Menu";
import ProductListTable from "../../components/homePage/productList/ProductListTable";
import Pagination from "../../components/homePage/pagination/Pagination";
import Filter from "../../components/homePage/filter/Filter";
import { filterByCategory, filterByPriceMax, filterByPriceMin, orderByPrice } from "../../components/homePage/filter/FilterFunction";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPagesNum = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleFilterProducts = (category, priceRangeLeft, priceRangeRight, order) => {
    let filtered = products;

    if (order !== "") {
      filtered = orderByPrice(filtered, order);
    }

    // Filtrer par catégorie
    if (category !== "") {
      filtered = filterByCategory(filtered, category);
    }

    // Filtrer par fourchette de prix gauche et droite
    if (priceRangeLeft !== "") {
      filtered = filterByPriceMax(filtered, priceRangeLeft);
    }

    if (priceRangeRight !== "") {
      filtered = filterByPriceMin(filtered, priceRangeRight);
    }
    // Mettre à jour les produits filtrés
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };


  return (
    <>
      <div className="nav-bar">
        <Barleft />
      </div>
      <div className="products-management__filter">
        <Filter handleFilterProducts={handleFilterProducts} />
      </div>
      <div className="products-management">
        <table className="products-management__table">

          <caption>Products management</caption>
          <thead className="products-management__colonne-product">
            <tr>
              <th scope="col">Product name</th>
              <th scope="col" style={{ width: "400px" }}>Category</th>
              <th scope="col" style= {{width: "100px"}}>Price</th>
              <th scope="col" id="TVA" >Price (including VAT)</th>

            </tr>
          </thead>
          <tbody>
            <ProductListTable products={currentProducts} />
          </tbody>
        </table>

        <div className="pagination">
          <Pagination
            totalPagesNum={totalPagesNum}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
