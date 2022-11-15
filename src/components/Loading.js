import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { BiRefresh } from 'react-icons/bi';
const Loading = () => {
  const style = {
    display: 'flex',
    justifyContent: 'flex-end',
  };
  return (
    <Row fluid className="weather-container justify-content-center">
      <div style={style} className="py-4 bg-light rounded">
        <Button>
          <BiRefresh
            onClick={() => {
              window.location.reload();
            }}
          />
        </Button>
      </div>
      <div className="city-container d-flex justify-content-center align-items-center p-5 mt-4">
        <Spinner animation="border" />
      </div>
    </Row>
  );
};

export default Loading;
