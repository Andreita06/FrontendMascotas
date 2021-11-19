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
        <Container>
          <Row>
            <Col xs>First, but unordered</Col>
            <Col xs={{ order: 12 }}>Second, but last</Col>
            <Col xs={{ order: 1 }}>Third, but second</Col>
          </Row>
        </Container>
    </div>
</div>

);
}

export default Footer;