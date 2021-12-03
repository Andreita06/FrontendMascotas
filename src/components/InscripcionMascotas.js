import React from 'react';
import '../index.css';
import { Col, Container, Row } from "react-bootstrap";
import InscripcionMascotas from '../images/inscripcionmascotas.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import logo from '../logo-clientes.png';
import Carousel from '../components/Carousel';


function inscripcionMascotas() {
    return (
        <div>
            <Carousel />
           
            <img src={logo} className="App-logo" />
            <br/>
            <br />
            <h2>Sistema de Registro de Mascotas</h2>
            <br /><br />
            <Container id="registro">
                <Row >
                    <Col ><img src={InscripcionMascotas} className="App-quienes" /></Col>
                    <Col ><Card>
                    <Card.Body> 

                    <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridNombreMascota">
                    <Form.Label><b>Nombre Mascota</b></Form.Label>
                    <Form.Control type="namemascota" placeholder="Entre el Nombre" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEdadMascota">
                    <Form.Label><b>Edad Mascota</b></Form.Label>
                    <Form.Control type="Edad" placeholder="Edad Mascota" />
                  </Form.Group>
                  </Row>

                  <Row className="mb-3">
                  <Form.Select aria-label="Default select example">
                  <option>Tipo de Mascota</option>
                  <option value="1">Perros</option>
                  <option value="2">Gatos</option>
                  <option value="3">Otros</option>
                </Form.Select>
                </Row>

                <Row className="mb-3">
                <Form.Select aria-label="Default select example">
                <option>Alergias</option>
                <option value="1">Si</option>
                <option value="2">No</option>
              </Form.Select>
              </Row>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción de la Alergia</Form.Label>
              <Form.Control as="textarea" rows={3} />
               </Form.Group>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridRaza">
                    <Form.Label><b>Raza Mascota</b></Form.Label>
                    <Form.Control type="raza" placeholder="Raza" />
                  </Form.Group>
                </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridUltimaMacunacion">
      <Form.Label><b>Ultima Vacunación</b></Form.Label>
      <Form.Control type="ultimavacunacion" placeholder="Ultima Vacunación" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridNombreVacuna">
      <Form.Label><b>Nombre Vacuna</b></Form.Label>
      <Form.Control type="nombrevacuna" placeholder="Nombre Vacuna" />
    </Form.Group>
  </Row>

  <Row >
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Notificar Proxima Vacunacion" />
  </Form.Group>
  </Row>

  <Row className="mb-3">
  <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              //onChange={handleChange}
              //isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              
            </Form.Control.Feedback>
          </Form.Group>
  </Row>

  <Button variant="primary" type="submit">
    Registrar Mascotas
  </Button>

  
</Form>

                    </Card.Body>
                    </Card></Col>
                </Row>
            </Container>
            <br />

            <Footer />

        </div>
    )
}

export default inscripcionMascotas;