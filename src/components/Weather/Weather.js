import React from 'react';
import './Weather.css';
import { BiRefresh } from 'react-icons/bi';
import moment from 'moment';
import Error from '../Error/Error';

const Weather = ({weatherData, error}) => {
  return (
    <>
    {error ? <Error /> : <main className="weather-container">
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

      <div className='weather-content'>
        <div className="weather-content-info">
          <h1>{weatherData.name}</h1>
          <h2>{weatherData.main.temp} &deg;F</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <h4>Description: {weatherData.weather[0].description}</h4>
        </div>
        <div className="d-flex justify-content-between mb-5">
          {' '}
          <h4>Feels like: {weatherData.main.feels_like} &deg;F</h4>
          <h4>Humdity: {weatherData.main.humidity} %</h4>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            Sunrise:{' '}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
          </p>
          <p>
            Sunset:{' '}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}
          </p>
        </div>
      </div>
    </main>}
    </>
    
  );
};

export default Weather;
