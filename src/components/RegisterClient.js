import React, { useContext, useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import logoCliente from "../logo-clientes.png"


const RegisterClient = ({ show, handleClose }) => {


    //Se desestructura y se llama la funcion que se va a usar?
    const { handleRegister } = useContext(AuthContext);

    const objForm = {
        primernombre: "",
        segundonombre: "",
        primerapellido: "",
        segundoapellido: "",
        identificacion: "",
        direccion: "",
        celular: "",
        correo: "",
        clave: ""
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
        handleRegister(form);
        //limpieza
        setForm(objForm)
        //cerrar
        handleClose();

    }

    return (
        <>

            {/* Modal que carga formulario de registro */}
            <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Registro Clientes</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Container>

                        <div className="logomodal">
                            <img alt="logo" src={logoCliente} className="App-logo" />
                        </div>

                        <Form onSubmit={handleSubmit}>

                            <Row>
                                <Col>
                                    <FloatingLabel htmlFor="primernombre" label="Primer Nombre" className="forminput">
                                        <Form.Control
                                            value={form.primernombre}
                                            onChange={handleForm}
                                            name="primernombre" id="primernombre" type="text"
                                            required />
                                    </FloatingLabel>

                                    <FloatingLabel htmlFor="primerapellido" label="Primer Apellido" className="forminput">
                                        <Form.Control
                                            value={form.primerapellido}
                                            onChange={handleForm}
                                            name="primerapellido" id="primerapellido" type="text" 
                                            required/>
                                    </FloatingLabel>

                                    <FloatingLabel htmlFor="identificacion" label="No. Identificación" className="forminput">
                                        <Form.Control
                                            value={form.identificacion}
                                            onChange={handleForm}
                                            name="identificacion" id="identificacion" type="number" 
                                            required/>
                                    </FloatingLabel>

                                    <FloatingLabel htmlFor="correo" label="Correo Electronico" className="forminput">
                                        <Form.Control
                                            value={form.correo}
                                            onChange={handleForm}
                                            name="correo" id="correo" type="email" 
                                            required/>
                                    </FloatingLabel>

                                </Col>
                                <Col>

                                    <FloatingLabel htmlFor="segundonombre" label="Segundo Nombre" className="forminput">
                                        <Form.Control
                                            value={form.segundonombre}
                                            onChange={handleForm}
                                            name="segundonombre" id="segundonombre" type="text" 
                                            required/>
                                    </FloatingLabel>

                                    <FloatingLabel htmlFor="segundoapellido" label="Segundo Apellido" className="forminput">
                                        <Form.Control
                                            value={form.segundoapellido}
                                            onChange={handleForm}
                                            name="segundoapellido" id="segundoapellido" type="text" 
                                            required/>
                                    </FloatingLabel>

                                    <FloatingLabel htmlFor="direccion" label="Dirección Residencia" className="forminput">
                                        <Form.Control
                                            value={form.direccion}
                                            onChange={handleForm}
                                            name="direccion" id="direccion" type="text"
                                            required />
                                    </FloatingLabel>

                                    <FloatingLabel htmlFor="celular" label="Celular" className="forminput">
                                        <Form.Control
                                            value={form.celular}
                                            onChange={handleForm}
                                            name="celular" id="celular" type="text" 
                                            required/>
                                    </FloatingLabel>
                                </Col>



                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel htmlFor="clave" label="Contraseña" className="forminputpass">
                                        <Form.Control
                                            value={form.clave}
                                            onChange={handleForm}
                                            name="clave" id="clave" type="password" 
                                            required/>
                                    </FloatingLabel>
                                </Col>
                            </Row>


                        </Form>


                        <div className="botform ">
                            <Button style={{ margin: "5px" }} variant="primary" onClick={handleSubmit}>
                                Enviar
                            </Button>

                            <Button style={{ margin: "5px" }} variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </div>

                    </Container>




                </Modal.Body>
            </Modal>





        </>
    )
}


export default RegisterClient;

