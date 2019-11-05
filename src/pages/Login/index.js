import React from "react";
import { Container, Row, InputGroup, FormControl, Col, Button, Card } from "react-bootstrap";
import { InputTextContainer } from "../../components/InputText";
import LoginPageStyle from "../../styles/BodyBlue";

function Login() {
    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={6}>
                        <Card style={{marginTop:120}}>
                            <Card.Body>
                                <Card.Title>Login</Card.Title>
                                <Row>
                                    <Col>
                                        <InputTextContainer>
                                            <InputGroup>
                                                <FormControl
                                                    placeholder="Username"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </InputTextContainer>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <InputTextContainer>
                                            <InputGroup>
                                                <FormControl
                                                    placeholder="Password"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    type="password"
                                                />
                                            </InputGroup>
                                        </InputTextContainer>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button>Logar</Button>
                                        <Button style={{marginLeft:12}} variant="link">Registrar-se</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;