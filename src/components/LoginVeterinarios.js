import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import logo from '../logo-veterinarios.png';

const LoginVeterinarios = ({hanleAuth}) => {

    const [user2, setUser] = useState(null);
    const [password2, setPassword] = useState(null);

    const handleUser = (e)=>{
        setUser(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const btnLogin = () => {
        hanleAuth(user2, password2);
    }

    const btnRegistrarse = () => {
        hanleAuth(user2, password2);
    }

    return (
        <>
            <header className="App-header">
                <Card border="dark" style={{ width: '25rem' }}>
                    <Card.Header>
                        <img src={logo} className="App-logo"/>
                        
                    </Card.Header>
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
                         <Button variant="dark" onClick={btnRegistrarse}> Registrarse </Button>{' '}
                    </Card.Body>
                </Card>
            </header>
        </>
    )
}

export default LoginVeterinarios;