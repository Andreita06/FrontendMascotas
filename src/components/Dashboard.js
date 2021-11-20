import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
//import {FontAwesomeIcon} from '@fortawesome/react.fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import icono from '../icono.svg'



const Dashboard = () => {


    return (
        <>

            <Navbar collapseOnSelect expand="lg">

                <Container>
                    <Navbar.Brand className="navbrand" href="#home">
                        <img
                            alt=""
                            src={icono}
                            width="50px"
                            height="auto"
                        />{' '}
                        PetVaccine</Navbar.Brand>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link className="links" href="/">Inicio</Nav.Link>
                            <Nav.Link className="links" href="#about">Acerca de</Nav.Link>
                            <Nav.Link className="links" href="#inscription">Inscripción</Nav.Link>
                            <Nav.Link className="links" href="#pet-data">Datos Mascotas</Nav.Link>
                            <Nav.Link className="links" href="#search">Consulta</Nav.Link>
                            <Nav.Link className="links" href="#contact">Contactos</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Dashboard;