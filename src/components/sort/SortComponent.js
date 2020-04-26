import React from 'react';
import './sort-component.scss';

const SortComponent = () => (
    <div className="sort-component">
        <a className="sortyby">Sort By</a>
        <a className="highlow">Price -- High Low</a>
        <a className="lowhigh">Price -- Low High</a>
    </div>
)

export default SortComponent;