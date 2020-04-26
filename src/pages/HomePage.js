import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return <div>
        <h3>dummy home page.........</h3>
        <br />
        <hr />
        <Link to="/shop"><h2>Go to Shop Page</h2></Link>
    </div>
};

export default HomePage;