import React, { Component } from "react";
import { Link} from "react-router-dom";

class ProductListTable extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products?limit=7 ')
        .then(response => response.json())
        .then(data => this.setState({ products: data }))
    }
    
 
    render() {
        return (
            <tbody className="products-management__position-product">
                {this.state.products.map((product, i) => {
                    return (
                        <React.Fragment key={i}>
                            <tr>
                                <td className="products-management__product name" data-label="Product name" key={i}>
                                <Link to={"/details/" + product.id}>
                                {product.title.length > 30 ? product.title.slice(0,24) + "..." : product.title}
                            </Link>
                            
                                </td>
                                <td className="products-management__category" data-label= "Category" > <div className= {product.category.slice(0,3)} >{product.category}</div> </td>
                                <td className="products-management__price" data-label="Price" >{product.price}€</td>
                                <td className="products-management__price-tva" data-label="Price (TVA)" >{product.price * 1.2 }€</td>
                            </tr>
                        </React.Fragment>
                    )  
                })}
            </tbody>
        )
    }
}

export default ProductListTable;