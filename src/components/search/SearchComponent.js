import React from 'react';
import './search.scss';

const SearchComponent = () => (
    <form className="form-inline">
        <input className="form-control search" type="search" placeholder="Search" aria-label="Search" />
   </form>
);

export default SearchComponent;