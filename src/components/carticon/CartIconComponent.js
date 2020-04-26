import React from 'react';
import {ReactComponent as ShoppingCart} from '../../assets/shopping-cart.svg';
import './cart-icon.scss';

const ShoppingCartIcon = () => (
    <div className="cart-icon">
       <ShoppingCart />
       <span className="added-items">{localStorage.getItem("item-count")}</span>
    </div>
);

export default ShoppingCartIcon;