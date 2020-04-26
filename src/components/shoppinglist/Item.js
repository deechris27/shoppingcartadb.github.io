import React from 'react';
import './item-style.scss';

const updateCart = () => {
      let initialCount = 0;
      initialCount += initialCount+1;
      localStorage.setItem("item-count",initialCount);
};

const Item = ({id, name, price, imageUrl}) => (
    <div key={id} className="collection-item">
        <div className="image" 
           style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
               <span className="name">{name}</span>
               <span className="price">{price}</span>
            </div>
            <button className="btn btn-warning add-to-cart" onClick={updateCart}>Add to Cart</button>
    </div>
)

export default Item;