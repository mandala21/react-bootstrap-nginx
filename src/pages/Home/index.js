import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Container } from "react-bootstrap";

function Home(){
    return (
        <Container>
            <Jumbotron>
                <h3>Hello World!</h3>
                <p>I am home page :)</p>
            </Jumbotron>
            <Link to="/login">
                <Button>Logar</Button>
            </Link>
        </Container>
    );
}

export default Home;