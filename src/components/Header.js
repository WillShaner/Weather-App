import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BsFillCloudSunFill } from 'react-icons/bs';

const Header = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand className="text-light align-items-center">
          <div className="brand">
            <BsFillCloudSunFill />
            <h4> Weather App</h4>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
