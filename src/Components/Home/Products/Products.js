import React from 'react';
import './Products.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Products = (props) => {
    const { stock, price, seller, img, name } = props.product;
    return (
        <div className="product d-flex">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="pl-3">
                <h4 style={{ color: 'blue', fontWeight: '400' }}>{name}</h4>
                <br></br>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>                
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className="addbutton"><ShoppingCartIcon></ShoppingCartIcon> Add to cart</button>
            </div>
        </div>
    );
};

export default Products;