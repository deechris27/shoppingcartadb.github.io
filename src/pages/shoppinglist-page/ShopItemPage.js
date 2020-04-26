import React from 'react';
import './shopping-list.scss';
import FilterComponent from '../../components/filter/FilterComponent';
import SHOP_DATA from './shop-data';
import ShoppingList from '../../components/shoppinglist/ShoppingList';

class ShopItemPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            items: SHOP_DATA
        };
    }

    render(){
        const {items} = this.state;
        console.log(items);
        return(
            <React.Fragment>
                <div className="sidenav">
                    <FilterComponent />
                </div>
                <div className="shopping-list">
                    {items.map(({id, ...otherItems})=>(
                        <ShoppingList key={id} {...otherItems}/>
                    ))}
                </div>
                <div className="footer">
                   <p>@Copyright</p>
                </div>
            </React.Fragment>
        )
    }
}

export default ShopItemPage;