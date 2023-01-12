import React from 'react';
import { BsFillCloudSunFill } from 'react-icons/bs';
import './Header.css'
const Header = () => {
  return (
    <header>
      <nav>
          <div className="brand">
            <BsFillCloudSunFill />
            <h4>Weather App</h4>
          </div>
      </nav>
    </header>
  );
};

export default Header;
