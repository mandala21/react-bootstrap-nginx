import React from "react";
import { useFormik } from "formik";
import { Form, Row, Col, Button,Input } from "antd";

export default function FormLogin(props) {
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        onSubmit:(values)=>{
            console.log(values);
        }
    });

    return (
        <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Row>
                <Col span={24} className="mg-bt-14">
                    <p>Email</p>
                    <Input name="email" value={formik.values.email} onChange={formik.handleChange} />    
                </Col>
                <Col span={24} className="mg-bt-14">
                    <p>Senha</p>
                    <Input.Password name="password" />    
                </Col>
            </Row>
            <Button
                type="primary"
                className="w-100 mg-bt-14"
                size="large"
                htmlType="submit">
                Entrar
            </Button>    
        </Form>
    );
}

