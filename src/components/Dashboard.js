import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
//import {FontAwesomeIcon} from '@fortawesome/react.fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
import icono from '../icono.svg'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';




const Dashboard = () => {

    let {signOut}=useContext(AuthContext);



    return (
        <>

            <Navbar collapseOnSelect expand="lg">

                <Container>
                    <Navbar.Brand className="navbrand">
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
                            <Nav.Link as={Link} to="/" className="links">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="about" className="links">Acerca de</Nav.Link>
                            <Nav.Link className="links" href="#registro">Inscripción</Nav.Link>
                            <Nav.Link as={Link} to="inscripcionMascotas" className="links">Datos Mascotas</Nav.Link>
                            <Nav.Link as={Link} to="consultas" className="links">Consultas</Nav.Link>
                            <Nav.Link className="links" href="#contactos">Contactos</Nav.Link>
                            <Nav.Link className="links" onClick={signOut} >Salir</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Salida de elementos */}
            <Outlet/>
        </>
    )
}

export default Dashboard;