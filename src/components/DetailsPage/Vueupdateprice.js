import React from "react";
import Uptadeprice from "./Uptadeprice";
import UptadepriceTva from "./Updatepricetva";

class Vueupdateprice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            id: window.location.pathname.split("/")[2],
            prix : null,
        };
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products/" + this.state.id)

            .then((response) => response.json())
            .then((data) => this.setState({ product: data }));
    }

    // fonction qui permet de mettre à jour le prix
    handlePriceUpdate = (prix) => {
        this.setState({ prix });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.product.price !== this.state.product.price) {
            this.setState({ prix: this.state.product.price });
        }
    }

    render() {
        return (
            console.log(this.state.product.price),
            <div className="products-details__price__container">

                <div className="products-details__price__vue-price">
                
                    <div>
                        <h3 id="price">Price :</h3>
                    </div>

                    <div className="static-prix-and-sigle">

                        <div className="static-prix">
                            {this.state.prix}

                            <div className="sigle" >
                                <p id="sigle">€</p>
                            </div>
                        </div>
                
                    </div>

                    
             </div>

                <div className="button-and-VAT">
                <Uptadeprice onPriceUpdate={this.handlePriceUpdate} />
                <UptadepriceTva price={this.state.prix }  />  
                </div>
                
            </div>

        );
    }
}

export default Vueupdateprice;
