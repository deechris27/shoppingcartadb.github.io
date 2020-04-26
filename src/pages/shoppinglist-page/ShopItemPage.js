import React from 'react';
import './shopping-list.scss';
import FilterComponent from '../../components/filter/FilterComponent';
import ShoppingList from '../../components/shoppinglist/ShoppingList';
import {connect} from 'react-redux';

const ShopItemPage = (props) => (
    <React.Fragment>
        <div className="sidenav">
            <FilterComponent />
        </div>
        <div className="shopping-list">
            {props.shop_data.map(({ id, ...otherItems }) => (
                <ShoppingList key={id} {...otherItems} />
            ))}
        </div>
        <div className="footer">
            <p>@Copyright</p>
        </div>
    </React.Fragment>
)

const mapStateToProps = state => ({
    shop_data: state.itemsReducer.SHOP_DATA
});

export default connect(mapStateToProps, null)(ShopItemPage);