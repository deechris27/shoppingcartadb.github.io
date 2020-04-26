import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import ShopItemPage from './pages/shoppinglist-page/ShopItemPage';
import CartPage from './pages/cartpage/CartPage';
import HomePage from './pages/HomePage';
// import SortComponent from './components/sort/SortComponent';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div>
      <HeaderComponent shopItems={props.shop_data}/>
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopItemPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
    shop_data: state.itemsReducer.SHOP_DATA
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
