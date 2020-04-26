import React from 'react';
import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg';
import './cart-icon.scss';

const ShoppingCartIcon = () => (
    <div className="shopping-cart">
       <ShoppingCart />
    </div>
);

export default ShoppingCartIcon;