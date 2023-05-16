export const filterByCategory = (products, category) => {
    if (category === "all") {
      return products;
    } else {
      return products.filter((product) => product.category === category);
    }
  };

export const filterByPriceMax = (products, price) => {
    return products.filter((product) => product.price <= price);
  };

export const filterByPriceMin = (products, price) => {
    return products.filter((product) => product.price >= price);
  };

export const orderByPrice = (products, order) => {
    if (order === "default") {
      return products;
    } else if (order === "asc") {
      return products.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      return products.sort((a, b) => b.price - a.price);
    }
  }
