/* eslint-disable jsx-a11y/alt-text */
import React, {} from 'react';
import './Details.scss';
import Barleft from '../../components/Menu';
import Vueupdateprice from '../../components/detailsPage/VueUpdatePrice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import ApiCall from '../../components/api/ApiCall';


function Details() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
            ApiCall()
            .then(data => setProduct(data))

    }, [])

        return (
            <><div className="nav-bar">
                <Barleft />
            </div >

            <div className="products-details">

                <div className='products-details__title'>
                    <h1>{product.title}</h1>
                </div>

                <div className='products-details__description-and-category'>
                    <div className='products-details__description'>
                        <h3 id='products-details__description__h3' >Description</h3>
                        <p id='products-details__description__p' >{product.description}</p>
                    </div>
        
                    <div className='products-details__category'> 
                        <h3 id='products-details__category__h3' >Category</h3>
                        <p id='products-details__category__p'>{product.category}</p>
                    </div>
                </div>
                <div className='products-details__price'>
                    <Vueupdateprice />
                </div>
                
                <div className='divclass'>
                    <img src={product.image} alt="product" id='img-details' />
                </div>
                
                <div className='arrow'>
                <Link to={"/"}><img src="https://img.icons8.com/ios-filled/50/null/long-arrow-left.png" alt='arrow'/></Link>          
                </div>
            </div></>
        )
    }
export default Details;
