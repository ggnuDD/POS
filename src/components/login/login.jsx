import React from "react";
import { Link } from 'react-router-dom';
import imgLogin from './login-img.svg';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';
function Login() {
    
    return (
        <Container className="container-fluid">
            <Row>
                <Col lg={4} md={6} sm={12}>
                <Form className="form-container">
                <Form.Group className="mb-3">
                    <Form.Label>Tài khoản</Form.Label>
                    <Form.Control type="text" placeholder="Nhập tài khoản của bạn" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Nhập mật khẩu của bạn" />
                    <Form.Text className="text-muted">
                    Chưa có tài khoản? <Link to="/register"> Đăng ký </Link>
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary btn-block" type="submit">
                    Đăng nhập
                </Button>
                </Form>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <img className="login-img" src={imgLogin}></img>
                </Col>
            </Row>
        </Container>
    )
    

}
export default Login;