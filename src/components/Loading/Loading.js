import React from 'react';
import "./Loading.css";
import { BiRefresh } from 'react-icons/bi';
import moment from 'moment';

const Loading = () => {
  return (
    <main className="loading-container">
     <div className="loading-header">
        <div>
          <h4>
            {moment().format('dddd')}, <span>{moment().format('LL')}</span>
          </h4>
        </div>
        <button className='reload-btn'>
          <BiRefresh
            onClick={() => {
              window.location.reload();
            }}
          />
        </button>
      </div> 
      <div className="loading-content">
      
        <div className='loading-animation-container'>
          <div className="loading-animation"></div>
                </div>
        </div>
    </main>
  );
};

export default Loading;
