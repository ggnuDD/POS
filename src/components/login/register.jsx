import React from "react";
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './login.css';
import imgreg from './register-img.svg';

function Register() {
    return (
      <Container className="container-fluid">
            <Row>
                <Col lg={4} md={6} sm={12}>
                <Form className="form-container">
                <Form.Group className="mb-3" >
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="number"/>
                </Form.Group>
              
                <Form.Group className="mb-3" >
                    <Form.Label>Tài khoản</Form.Label>
                    <Form.Control type="text" placeholder="Nhập tài khoản của bạn" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Nhập mật khẩu" />
                    
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Xác nhận mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
                    <Form.Text className="text-muted">
                    Đã có tài khoản? <Link to="/login"> Đăng nhập </Link>
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary btn-block" type="submit">
                    Đăng ký
                </Button>
                </Form>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <img className="login-img" src={imgreg}></img>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;