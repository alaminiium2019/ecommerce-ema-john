import React from 'react';


const Cart = (props) => {
    const cart = props.cart;

    //const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 12.9;
    }
    const tax = total / 10;
    const grandTotal = (total+shipping+Number(tax)).toFixed(2);
    return (
        <div>
            <h3>Order summary</h3>
            <p>Items ordered:{cart.length}</p>
            <p>Product Price:{total.toFixed(2)}</p>
            <p>Shipping cost:{shipping} </p>
            <p><small>Tax + VAT: {tax.toFixed(2)}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;