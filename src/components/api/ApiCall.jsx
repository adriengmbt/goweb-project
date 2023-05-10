// code for fetching data from api
const ApiCall = () => {
    return fetch('https://fakestoreapi.com/products/' + window.location.pathname.split("/")[2])
      .then(response => response.json());
  };
  
  export default ApiCall;
  