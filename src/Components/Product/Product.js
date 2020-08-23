import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';
const Product = (props) => {
    console.log(props.product.name);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="product-name">
                <h4>{name}</h4>
                <br />
                <p><small>by {seller}</small></p>
                <br />
                <p><small>${price}</small></p>
                <br />
                <p><small>Only {stock}left Order now</small></p>
                
                <button className="button"><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;