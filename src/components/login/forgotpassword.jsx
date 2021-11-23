import React from "react";
import img from './password.svg';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';
import { Link } from 'react-router-dom';

function Forgotpassword() {
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
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Nhập email để xác nhận" />
                </Form.Group>
                        
                <Form.Group className="mb-3">
                <Form.Text className="text-muted">
                    Chúng tôi sẽ gửi mã xác nhận đến email của bạn
                </Form.Text>
                </Form.Group>
                <Link to="/newpassword">                       
                <Button variant="danger" size="lg" type="submit">
                    Gửi mã xác nhận
                </Button>
                </Link>
                </Form>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <img className="login-img" src={img}></img>
                </Col>
            </Row>
        </Container>
    )
}

export default Forgotpassword;