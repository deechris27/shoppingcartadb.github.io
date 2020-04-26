import React from 'react';
import './filter.scss';

const FilterComponent = () => {
    return (
          <div className="range-filter">
               <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                <div className="range-apply-button">
                   <button className="btn btn-primary">Apply</button>
                </div>
          </div>
    )
};

export default FilterComponent;