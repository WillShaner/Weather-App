import './index.css';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import Weather from './components/Weather/Weather';
import Background from './assets/background.jpg';
import Loading from './components/Loading/Loading';
import Footer from './components/Footer/Footer';
function App() {
  const [error, setError] = useState(false)
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const style = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
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
        <Weather weatherData={data} error={error} setError={setError} />
      ) : (
        <Loading />
      )}
      <Footer />
    </div>
  );
}

export default App;
