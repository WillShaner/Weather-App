import React, {useEffect} from 'react';
import './Weather.css';
import { BiRefresh } from 'react-icons/bi';
import moment from 'moment';
import Error from '../Error/Error';

const Weather = ({weatherData, error, setBackground}) => {
  // var currentTime = moment()  
  const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')
  const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')
  
  const currentHours = Number(moment().format("HH"))
  const sunriseHours = Number(new Date(weatherData.sys.sunrise * 1000).getHours())
  const sunsetHours = Number(new Date(weatherData.sys.sunset * 1000).getHours())

  console.log(currentHours, sunriseHours, sunsetHours)

  useEffect(() => {
    if (currentHours < sunsetHours && currentHours > sunriseHours) {
      setBackground('linear-gradient(137deg, rgba(1,128,185,1) 0%, rgba(255,255,255,1) 100%)')
    }
    if(currentHours === sunriseHours) {
      setBackground('linear-gradient(123deg, rgba(255,255,255,1) 0%, rgba(94,195,210,1) 100%)')
    }
    if(currentHours === sunsetHours) {
      setBackground('linear-gradient(137deg, rgba(191,120,238,1) 0%, rgba(247,78,78,0.9985974754558204) 50%, rgba(245,183,95,1) 100%)')
    }
    if(currentHours < sunriseHours) {
      setBackground('linear-gradient(123deg, rgba(0,7,61,1) 0%, rgba(61,32,226,1) 100%)')
    }
    else if(currentHours > sunsetHours && currentHours < 24){
      setBackground('linear-gradient(123deg, rgba(0,7,61,1) 0%, rgba(61,32,226,1) 100%)')
    }
  })

  return (

    <>
    {error ? <Error /> : <main className="weather-container">
      <div className="loading-header">
        <div>
          <h4>
            {moment().format('dddd')}, <span>{moment().format('LL')}</span>
          </h4>
          <h4>{moment().format("hh:mm a")}</h4>
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
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
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
            {sunrise}
          </p>
          <p>
            Sunset:{' '}
            {sunset}
          </p>
        </div>
      </div>
    </main>}
    </>
    
  );
};

export default Weather;
