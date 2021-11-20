import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import logo from '../logo-veterinarios.png';
import { Accordion, Modal, useAccordionButton } from 'react-bootstrap'
import RegisterVet from './RegisterVet'



function CustomToggleVet({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button
        variant="link"
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}

const LoginVeterinarios = ({ hanleAuth }) => {

    const [user2, setUser] = useState(null);
    const [password2, setPassword] = useState(null);

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const btnLogin = () => {
        hanleAuth(user2, password2);
    }

    const btnRegistrarse = () => {
        hanleAuth(user2, password2);
    }

      // Estados para el uso del modal
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    return (
        <>
            <header className="App-header">
                <Accordion>
                    <Card border="dark" style={{ width: '30rem' }}>
                        <Card.Header>
                            <CustomToggleVet eventKey="1"><img src={logo} className="App-logo"/></CustomToggleVet>

                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {/*------Usuario------*/}
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Usuario</InputGroup.Text>
                                    <FormControl value={user2} name="user" onChange={handleUser} aria-label="First name" />
                                </InputGroup>
                                {/*------Password------*/}
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Password</InputGroup.Text>
                                    <FormControl value={password2} name="password" onChange={handlePassword} type="password" aria-label="First name" />
                                </InputGroup>
                                {/*------Botón de iniciar sesión------*/}
                                <Button variant="dark" onClick={btnLogin}>Iniciar Sesión</Button>{' '}

                                {/*------Botón Registrase------*/}
                                <Button variant="dark" onClick={handleShow}> Registrarse </Button>{' '}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </header>
            {/* Modal que carga formulario de registro */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Registro Clientes</Modal.Title>
                </Modal.Header>
                <Modal.Body><RegisterVet/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default LoginVeterinarios;