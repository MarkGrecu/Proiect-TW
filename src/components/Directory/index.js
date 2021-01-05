import React from 'react';
import { Link } from 'react-router-dom';
import ShopMen from './../../assets/amd_logo.png';
import ShopWomen from './../../assets/intel_logo.png';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`
          }}
        >
          <Link to="/search/Intel">
            Intel Shop
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`
          }}
        >
          <Link to="/search/AMD">
            AMD Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
