import React from 'react';
import './filter.scss';

const FilterComponent = () => {
    return (
          <div className="range-filter">
                <input value="500" min="500" max="50000" step="500" type="range" />
                <div className="range-apply-button">
                   <button className="btn btn-primary">Apply</button>
                </div>
          </div>
    )
};

export default FilterComponent;