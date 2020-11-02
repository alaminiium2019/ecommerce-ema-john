import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);


    const handleAddProduct = (products) =>{
        console.log('Product added',products)
        const newCart = [...cart, products];
        setCart(newCart);
    }
   

    return (
        <div className="shop_container">
            <div className="product_container">
                {
                    products.map(product =><Products products={product} addProduct={handleAddProduct}></Products>)
                }

            </div>
            <div className="cart_container">
                <Cart cart={cart}></Cart>
            </div>          

        </div>
    );
};

export default Shop;