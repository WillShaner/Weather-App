import React from 'react';
import '../style/Weather.css';
import Row from 'react-bootstrap/Row';
import { BiRefresh } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

const Weather = (props) => {
  const { weatherData } = props;
  return (
    <Row fluid className="weather-container justify-content-center">
      <div className="d-flex justify-content-between align-items-center p-3 mb-5 bg-light text-dark rounded">
        <div>
          <h4>
            {moment().format('dddd')}, <span>{moment().format('LL')}</span>
          </h4>
        </div>
        <Button>
          <BiRefresh
            onClick={() => {
              window.location.reload();
            }}
          />
        </Button>
      </div>
      <div className="city-container text-center">
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
    </Row>
  );
};

export default Weather;
