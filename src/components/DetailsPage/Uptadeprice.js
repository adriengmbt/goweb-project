import React, { Component } from 'react';


class Uptadeprice extends Component {
    state = {
        product: [],
        id : window.location.pathname.split("/")[2]

    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products/' + this.state.id,)
            .then(response => response.json())
            .then(data => this.setState({ product: data }))
    }


    render() {
        return (
            // bouton qui permet de mettre à jour le prix
            <div>
                 <button className='button' onClick={() => {
                    // requête PUT pour mettre à jour le prix
                        fetch('https://fakestoreapi.com/products/' + this.state.id, {
                            method: 'PATCH',
                            body: JSON.stringify({
                                price: 125.5
                            }),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            }
                        })
                        .then(response => response.json())
                        // props qui recupère le prix mis à jour
                        .then(json => {this.props.onPriceUpdate(json.price);})
                    }}
                    >Update product</button>
            </div>
        )
    }
}

export default Uptadeprice;
