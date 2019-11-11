import React from "react";
import { Button, Col, Row } from "antd";
import { LoginStyle } from './styles';

function Home(props){
    return (
        <>
            <Row style={{height:'100%'}}>
                <Col span={16}>
                    <LoginStyle background="#BFFFEF"> Ola </LoginStyle>
                </Col>
                <Col span={8}>
                    Login Panel
                </Col>
            </Row>
        </>
    );
}

export default Home;