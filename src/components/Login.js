import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import React, { useContext, useState } from 'react'
import logo from '../logo-clientes.png';
import { Accordion, useAccordionButton } from 'react-bootstrap'

import AuthContext from '../context/AuthContext'
import RegisterClient from './RegisterClient'

function CustomToggle({ children, eventKey }) {
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


const Login = () => {

    //uso de contexto
    const { handleAuth } = useContext(AuthContext);
    //usar el hook useState para estados del componente

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        handleAuth(user, password);
    }

    const btnLogin = () => {
        // handleAuth(user, password);


    }

    const btnRegistrarse = () => {
        // handleAuth(user, password);
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
                            <CustomToggle eventKey="0"><img src={logo} className="App-logo" /></CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {/*------Usuario------*/}
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Usuario</InputGroup.Text>
                                    <FormControl value={user} name="user" onChange={handleUser} aria-label="First name" />
                                </InputGroup>
                                {/*------Password------*/}
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Password</InputGroup.Text>
                                    <FormControl value={password} name="password" onChange={handlePassword} type="password" aria-label="First name" />
                                </InputGroup>
                                {/*------Botón de iniciar sesión------*/}
                                <Button variant="dark" onClick={handleLogin}> Iniciar Sesión </Button>{' '}

                                {/*------Botón Registrase------*/}
                                <Button variant="dark" onClick={handleShow}> Registrarse </Button>{' '}

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </header>
            {/* Modal con props */}
            <RegisterClient show={show} handleClose={handleClose} />
        </>
    )
}

export default Login;