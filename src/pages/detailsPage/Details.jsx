/* eslint-disable jsx-a11y/alt-text */
import React, {} from 'react';
import '../../styles/Main.scss';
import Barleft from '../../components/navBar/Menu';
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
                    <h1 className='products-details__h1' >{product.title}</h1>
                </div>

                <div className='products-details__container'>
                    <div className='products-details__description'>
                        <h3 className='products-details__h3 products-details__description-h3' id='products-details__description__h3' >Description</h3>
                        <p className='products-details__p' id='products-details__description__p' >{product.description}</p>
                    </div>
        
                    <div className='products-details__category'> 
                        <h3 className='products-details__h3 products-details__category-h3 ' id='products-details__category__h3' >Category</h3>
                        {product.category && <p className={product.category.slice(0, 3)} >{product.category}</p>}
                    </div>
                    <div className='products-details__price'>
                        <Vueupdateprice />
                    </div>
                </div>

                
                <div className='products-details__image'>
                    <img src={product.image} alt="product" id='img-details' className='products-details__img' />
                </div>
                
                <div className='products-details__arrow'>
                <Link to={"/"}><img className='products-details__arrow-img' src="https://img.icons8.com/ios-filled/50/null/long-arrow-left.png" alt='arrow'/></Link>          
                </div>
            </div></>
        )
    }
export default Details;
