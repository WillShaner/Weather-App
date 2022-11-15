import './App.css';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import Weather from './components/Weather';
import Background from './assets/background.jpg';
import Loading from './components/Loading';
function App() {
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
          setData(result);
          console.log(result, lat, long);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <Container fluid style={style}>
      <Header />
      {typeof data.main != 'undefined' ? (
        <Weather weatherData={data} />
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default App;
