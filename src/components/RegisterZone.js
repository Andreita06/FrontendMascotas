import { Col, Container, Row } from "react-bootstrap"
import Login from "./Login"
import LoginVeterinarios from "./LoginVeterinarios"

function RegisterZone(handleAuth) {
    return (
        <div>
            <h1>Ingrese o Regístrese</h1>
            <br/>
            <Container id="registro">
                <Row >
                    <Col ><LoginVeterinarios /></Col>
                    <Col ><Login  /></Col>
                </Row>
            </Container>
            <br/>
        </div>
    )
}

export default RegisterZone
