import React from 'react';
import Barleft from '../Menu';
import ProductListTable from './ProductListTable';


class Home extends React.Component {


  render() {
    return (
        
        <><div className="nav-bar">
            <Barleft />
        </div >

        
            <div className="products-management">
                <table className='products-management__table' >
                    <caption>Products management</caption>
                    <thead className='products-management__colonne-product'>
                        <tr>
                            <th scope="col">Product name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Price (incuding VAT)</th>
                        </tr>
                    </thead>

                        <ProductListTable />     
                                       


                </table>
            </div> </>
            
      
    );
  }
}

export default Home;