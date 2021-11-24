import React from "react";
import img from './password.svg';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';
import { Link } from 'react-router-dom';

function Newpassword() {
    return (
        <Container className="container-fluid">
            <Row>
                <Col lg={4} md={6} sm={12}>
                <Form className="form-container">
                <Form.Group className="mb-3">
                    <Form.Label>Mã xác nhận</Form.Label>
                    <Form.Control type="number" placeholder="Nhập mã xác nhận đậ được gửi" />
                </Form.Group>
                        
                <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu mới</Form.Label>
                    <Form.Control type="password" placeholder="Nhập mật khẩu mới của bạn" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Xác nhận mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Nhập nhập lại mật khẩu để xác nhận" />
                </Form.Group>
                
                <Link to="/login"><Button variant="danger" size="lg" type="submit">
                    Xác nhận
                </Button></Link>        
                
                </Form>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <img className="login-img" src={img}></img>
                </Col>
            </Row>
        </Container>
    )
}

export default Newpassword;