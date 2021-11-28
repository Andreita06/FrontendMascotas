import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Footer = () => {

    return(

<div className="App-footer">
    <div className="card-body">
        <Container className='footer-container' id="contactos">
          <Row>
            <Col >Misión Tic 2021 - Copyright: PetVaccine www.petvaccine.com- info@petvaccine.com</Col>
            <Col >
            <img
              alt="fb-icon"
              src="https://img.icons8.com/color/96/000000/facebook.png"
              width="70px"
              height="auto"
            />{' '}
            <img
              alt="ig-icon"
              src="https://img.icons8.com/color/96/000000/instagram-new--v1.png"
              width="70px"
              height="auto"
            />{' '}
            <img
              alt=""
              src="https://img.icons8.com/color/96/000000/whatsapp--v1.png"
              width="70px"
              height="auto"
            />{' '}
            </Col>
          </Row>
        </Container>
        <a className="iconcredits" href="https://icons8.com/icon/13912/facebook">Facebook icon by Icons8</a>{' '}
        <a className="iconcredits" href="https://icons8.com/icon/32323/instagram">Instagram icon by Icons8</a>{' '}
        <a className="iconcredits" href="https://icons8.com/icon/16713/whatsapp">WhatsApp icon by Icons8</a>
    </div>
</div>

);
}

export default Footer;