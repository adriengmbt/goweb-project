/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Details.scss';
import Barleft from '../Menu';
import './Uptadeprice';
import Vueupdateprice from './Vueupdateprice';
import { Link } from 'react-router-dom';


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            id : window.location.pathname.split("/")[2],
            prix : null,
        }
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products/' + this.state.id )
            .then(response => response.json())
            .then(data => this.setState({ product: data }))
    }

  


    render() {
        return (
            <><div className="nav-bar">
                <Barleft />
            </div >

            <div className="products-details">

                <div className='products-details__title'>
                    <h1>{this.state.product.title}</h1>
                </div>

                <div className='products-details__description-and-category'>
                    <div className='products-details__description'>
                        <h3 id='products-details__description__h3' >Description</h3>
                        <p id='products-details__description__p' >{this.state.product.description}</p>
                    </div>
        
                    <div className='products-details__category'> 
                        <h3 id='products-details__category__h3' >Category</h3>
                        <p id='products-details__category__p'>{this.state.product.category}</p>
                    </div>
                </div>
                <div className='products-details__price'>
                    <Vueupdateprice />
                </div>



                <div className='divclass'>
                    <img src={this.state.product.image} alt="product" id='img-details' />
                </div>
                
                <div className='arrow'>
                <Link to={"/"}><img src="https://img.icons8.com/ios-filled/50/null/long-arrow-left.png"/></Link>
                </div>

            </div></>

        )


    }


                

}




export default Details;
