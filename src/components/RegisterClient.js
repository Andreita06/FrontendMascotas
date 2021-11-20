import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import logoCliente from "../logo-clientes.png"


const RegisterClient = () => {

    return (
        <>
            <div className="logomodal">
                <img src={logoCliente} className="App-logo" />
            </div>

            <Row>
                <Col>
                    <FloatingLabel controlId="floatingFirstName" label="Primer Nombre" className="forminput">
                        <Form.Control type="text" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingFirstSurname" label="Primer Apellido" className="forminput">
                        <Form.Control type="text" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingID" label="No. Identificación" className="forminput">
                        <Form.Control type="text" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingEmail" label="Correo Electronico" className="forminput">
                        <Form.Control type="email" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingSecondName" label="Segundo Nombre" className="forminput">
                        <Form.Control type="text" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSecondSurname" label="Segundo Apellido" className="forminput">
                        <Form.Control type="text" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingAdress" label="Dirección Residencia" className="forminput">
                        <Form.Control type="text" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingCellphone" label="Celular" className="forminput">
                        <Form.Control type="email" />
                    </FloatingLabel>

                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel controlId="floatingPass" label="Contraseña" className="forminputpass">
                        <Form.Control type="password" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingPass" label="Confirme Contraseña" className="forminputpass">
                        <Form.Control type="password" />
                    </FloatingLabel>
                </Col>
            </Row>

        </>
    )
}

export default RegisterClient
