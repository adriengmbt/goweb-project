// filterbyCategory function is used to filter products by category, if the category is "all" it returns all the products, otherwise it returns the products that have the same category as the one selected by the user.
export const filterByCategory = (products, category) => {
    if (category === "all") {
      return products;
    } else {
      return products.filter((product) => product.category === category);
      
    }
  };
  
// filterByPriceMax function is used to filter products by price, it returns the products that have a price less than or equal to the price selected by the user.
export const filterByPriceMax = (products, price) => {
    return products.filter((product) => product.price <= price);
  };

// filterByPriceMin function is used to filter products by price, it returns the products that have a price greater than or equal to the price selected by the user.
export const filterByPriceMin = (products, price) => {
    return products.filter((product) => product.price >= price);
  };

// orderByPrice function is used to order products by price, if the order is "default" it returns the products in the same order as the array, if the order is "asc" it returns the products in ascending order, if the order is "desc" it returns the products in descending order.
export const orderByPrice = (products, order) => {
    if (order === "default") {
      return products;
    } else if (order === "asc") {
      return products.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      return products.sort((a, b) => b.price - a.price);
    }
  }
