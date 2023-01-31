import './index.css';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import Weather from './components/Weather/Weather';
// import Background from './assets/background.jpg';
import Loading from './components/Loading/Loading';
import Footer from './components/Footer/Footer';

function App() {
  const [error, setError] = useState(false)
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [background, setBackground] = useState(null)
  
  const style = {
    backgroundColor: 'lightblue',
    background: `${background}`,
  };
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=7abcb94924cccac024edc3185f2247cf`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result)
        }).catch(error => {
          console.log(error)
          setError(true)}
          );
        
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="main-container" style={style}>
      <Header />
      {typeof data.main != 'undefined' ? (
        <Weather weatherData={data} error={error} setError={setError} setBackground={setBackground} />
      ) : (
        <Loading />
      )}
      <Footer />
    </div>
  );
}

export default App;
