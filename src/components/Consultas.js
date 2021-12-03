import React from 'react';
import '../index.css';
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import Carousel from '../components/Carousel';
import Mascota1 from '../images/mascota1.jpg';
import Mascota2 from '../images/mascota2.jpg';
import Mascota3 from '../images/mascota3.jpg';


function consultas() {
    return (
        <div>
            <Carousel />
           
            <br/>
            <br />
            <h2>Consulta de Mascotas de Registradas</h2>
            <br /><br />

            <Row>
            <Col><Card>
            <img src={Mascota1} className="App-quienes" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card></Col>
            <Col>  <Card>
            <img src={Mascota2} className="App-quienes" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card></Col>
            <Col> <Card>
            <img src={Mascota3} className="App-quienes" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card></Col>
          </Row>
          
            
            <br />

            <Footer />

        </div>
    )
}

export default consultas;