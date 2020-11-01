import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    return (
        <div className="shop_container">
            <div className="product_container">
                {
                    products.map(product => <Products product={product}></Products>)
                }
                

            </div>
            <div className="cart_container">
                <Cart></Cart>

            </div>          

        </div>
    );
};

export default Shop;