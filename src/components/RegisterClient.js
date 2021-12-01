import React, { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import logoCliente from "../logo-clientes.png"


const RegisterClient = () => {

    const objForm = {
        firstname: "",
        secondname: "",
        firstsurname: "",
        secondsurname: "",
        id: "",
        number: "",
        adress: "",
        cellphone: "",
        email: "",
        password: ""
    }

    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        //Desempaquetado de form para que dependiendo del name se asigne el value
        let array = { ...form, [e.target.name]: e.target.value };
        setForm(array);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //llamar la funcion del contexto

    }


    return (
        <>
            <div className="logomodal">
                <img src={logoCliente} className="App-logo" />
            </div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <FloatingLabel htmlFor="firstname" label="Primer Nombre" className="forminput">
                            <Form.Control
                                value={form.firstname}
                                onChange={handleForm}
                                name="firstname" id="firstname" type="text" />
                        </FloatingLabel>

                        <FloatingLabel htmlFor="firstsurname" label="Primer Apellido" className="forminput">
                            <Form.Control
                                value={form.firstsurname}
                                onChange={handleForm}
                                name="firstsurname" id="firstsurname" type="text" />
                        </FloatingLabel>

                        <FloatingLabel htmlFor="id" label="No. Identificación" className="forminput">
                            <Form.Control
                                value={form.id}
                                onChange={handleForm}
                                name="id" id="id" type="number" />
                        </FloatingLabel>

                        <FloatingLabel htmlFor="email" label="Correo Electronico" className="forminput">
                            <Form.Control
                                value={form.email}
                                onChange={handleForm}
                                name="email" id="email" type="email" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel htmlFor="secondname" label="Segundo Nombre" className="forminput">
                            <Form.Control
                                value={form.secondname}
                                onChange={handleForm}
                                name="secondname" id="secondname" type="text" />
                        </FloatingLabel>

                        <FloatingLabel htmlFor="secondsurname" label="Segundo Apellido" className="forminput">
                            <Form.Control
                                value={form.secondsurname}
                                onChange={handleForm}
                                name="secodnsurname" id="secondsurname" type="text" />
                        </FloatingLabel>

                        <FloatingLabel htmlFor="adress" label="Dirección Residencia" className="forminput">
                            <Form.Control
                                value={form.adress}
                                onChange={handleForm}
                                name="adress" id="adress" type="text" />
                        </FloatingLabel>

                        <FloatingLabel htmlFor="cellphone" label="Celular" className="forminput">
                            <Form.Control
                                value={form.cellphone}
                                onChange={handleForm}
                                name="cellphone" id="cellphone" type="text" />
                        </FloatingLabel>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel htmlFor="password" label="Contraseña" className="forminputpass">
                            <Form.Control
                                value={form.password}
                                onChange={handleForm}
                                name="password" id="password" type="password" />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Form>


        </>
    )
}

export default RegisterClient
