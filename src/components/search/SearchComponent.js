import React from 'react';
import './search.scss';

const SearchComponent = ({searchChange}) => (
    <form className="form-inline">
        <input className="form-control search" type="search" placeholder="Search" aria-label="Search" onChange={searchChange}/>
   </form>
);

export default SearchComponent;