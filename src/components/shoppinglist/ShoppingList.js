import React from 'react';
import './shopping-list.scss';
import Item from './Item';

const ShoppingList = ({title, items}) => {
    return <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, i)=>i<4).map(item=>(
               <Item {...item}/>
            ))}
        </div>
    </div>
};


export default ShoppingList;