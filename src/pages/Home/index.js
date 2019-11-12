import React from "react";
import { Button, Col, Row, Input } from "antd";
import { InputTextGroup } from "../../components/Input";
import "./style.css";

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
                        <h1>Acesse sua conta</h1>
                        <div>
                            <InputTextGroup label="Email" />
                        </div>
                        <div>
                            <p>Senha</p>
                            <Input.Password />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Home;