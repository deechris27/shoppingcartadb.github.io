import React, {useState} from 'react';
//import CartIconComponent from '../carticon/CartIconComponent';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/star.svg';
import SearchComponent from '../search/SearchComponent';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Link, withRouter} from 'react-router-dom';

const HeaderComponent = (props) => {

  const [display, setDisplay] = useState(false);
  const showSearch = () => {
    setDisplay(!display);
  };

  const onSearchChange = (event)=>{
    const filteredItems = props.shopItems.map(item=>{
        return item.items.filter(item=>{
          return item.name.toLowerCase().includes(event.target.value);
        })
    })
    props.updateShopData(filteredItems);
  };

  const gotoCart = () => {
      props.history.push('/cart');
  }

    return <div className="topnav" id="myTopnav">
        <Link to="/"><Logo /></Link>
        <div className="icons">
          {display ? <SearchComponent searchChange={onSearchChange}/> : ""}
          <i className="fa fa-search fa-1x search-icon" onClick={showSearch} aria-hidden="true"></i>
          <i className="fa fa-shopping-cart fa-2x cart-icon" aria-hidden="true" onClick={gotoCart}></i>
           {/* <CartIconComponent /> */}
          <span className="added-items">{localStorage.getItem("item-count")}</span>
        </div>
    </div>
};

const mapDispatchToProps = dispatch => ({
    updateShopData: (items) => dispatch({type:'UPDATE_SHOP_ITEMS', payload: items})
});

export default compose(withRouter, connect(null, mapDispatchToProps))(HeaderComponent);