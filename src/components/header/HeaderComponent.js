import React, {useState} from 'react';
// import CartIconComponent from '../carticon/CartIconComponent';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/star.svg';
import SearchComponent from '../search/SearchComponent';

const HeaderComponent = () => {
  const [display, setDisplay] = useState(false);
  const showSearch = () => {
    console.log(display);
    setDisplay(!display);
  };
    return <div className="topnav" id="myTopnav">
        <a href="#home"><Logo /></a>
        <div className="icons">
          {display ? <SearchComponent /> : ""}
          <i className="fa fa-search fa-1x search-icon" onClick={showSearch} aria-hidden="true"></i>
          <i className="fa fa-shopping-cart fa-2x cart-icon" aria-hidden="true"></i>
        </div>
    </div>
};

export default HeaderComponent;