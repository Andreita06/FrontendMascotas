import React from 'react';
import '../index.css';
import { Col, Container, Row } from "react-bootstrap";
import Quienes from '../images/quienes.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

function About() {
    return (
        <div>
            <Carousel />
            <h1>ACERCA DE</h1>
            <br/>
            <h2>Quienes Somos</h2>
            <Container id="registro">
                <Row >
                    <Col ><img src={Quienes} className="App-quienes" /></Col>
                    <Col ><Card>
                    <Card.Body> <p align="left"><b>PetVaccine</b> cuenta con un excelente equipo de profesionales de médicos veterinarios altamente calificados en el sector de la medicina para animales, capacitados de ofrecer una calidad de vida a sus mascotas llegando a los diagnósticos que permitirán enfocar los tratamientos de manera eficiente y oportuna haciendo seguimiento a la historia clínica para recomendar los procesos adecuados.</p> 
                    <p align="left">En nuestras sedes podrás llevar a tu mascota para que sea atendida por nuestros profesionales en medicina animal ya sea para procedimientos de rutina como desparasitar, limpieza de oidos, corte de uñas, vacunas así como procedimientos de emergencia o tratamientos especiales por enfermedad.</p></Card.Body>
                    </Card></Col>
                </Row>
            </Container>
            <br />

            <Footer />

        </div>
    )
}

export default About;