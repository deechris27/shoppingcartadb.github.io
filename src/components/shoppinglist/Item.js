import React from 'react';
import './item-style.scss';

const Item = ({id, name, price, imageUrl}) => (
    <div key={id} className="collection-item">
        <div className="image" 
           style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
               <span className="name">{name}</span>
               <span className="price">{price}</span>
            </div>
            <button className="btn btn-warning add-to-cart">Add to Cart</button>
    </div>
)

export default Item;