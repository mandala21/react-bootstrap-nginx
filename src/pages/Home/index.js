import React from "react";
import { Col, Row } from "antd";
import {  ButtonGroup } from "../../components/Input";
import "./style.css";
import FormLogin from "./form";

function Home(props){    
    return (
        <>
            <div className="wrapper">
                <Row className="h-100">
                    <Col span={16} className="h-100">
                        <div className="leftContainer h-100">
                            <p>Background login</p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="pd-64">
                            <h1>Acesse sua conta</h1>
                            <FormLogin />                   
                            <Row>
                                <Col span={24}>
                                    <ButtonGroup label="Criar uma conta" className="w-100" type="dashed" size="large" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Home;