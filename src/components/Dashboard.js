import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
//import {FontAwesomeIcon} from '@fortawesome/react.fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
 

    return (
        <>

                        
            
                    <Navbar bg="dark" variant="dark">
                        <Container>
                        
                       
                            <Navbar.Brand href="#home">PetVaccine</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Inicio</Nav.Link>
                                <Nav.Link href="#features">Aerca de</Nav.Link>
                                <Nav.Link href="#pricing">Contactenos</Nav.Link>
                                
                            </Nav>
                        </Container>
                    </Navbar>
            

        </>
    )
}

export default Dashboard;