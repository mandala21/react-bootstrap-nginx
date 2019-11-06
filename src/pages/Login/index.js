import React, {useState} from "react";
import { Container, Row, InputGroup, FormControl, Col, Button, Card } from "react-bootstrap";
import { InputTextContainer } from "../../components/InputText";
import LoginPageStyle from "../../styles/BodyBlue";
import { callApi } from "../../services/api";
import { setToken } from "../../services/storage";

function Login(props) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    function handleLoginAction() {
        let dataLogin = {
            password:password,
            username:username,
        }
        //request to backend for login
        callApi(dataLogin);
        setToken('123');
    }

    return (
        <>
            <LoginPageStyle />
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
                                                    onChange={e=>setUsername(e.target.value)}
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
                                                    onChange={e=>setPassword(e.target.value)}
                                                />
                                            </InputGroup>
                                        </InputTextContainer>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button onClick={handleLoginAction}>Logar</Button>
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