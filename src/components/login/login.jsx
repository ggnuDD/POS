import React from "react";
import { Link } from 'react-router-dom';
import imgLogin from './login-img.svg';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { AuthController } from "../../context/AuthController";
import axios from "axios";

function Login(props) {
    const [showError, setShowError] = useState("");
    const userNameRef = useRef("");
    const passwordRef = useRef("");
    const { isLogin, setIsLogin } = useContext(AuthController);
    const history = useNavigate();
    function handleOnClick(event) {
        event.preventDefault();

        if (userNameRef.current.value && passwordRef.current.value) {
            axios({
                method: "post",
                url: "http://localhost/ticket-online/server/index.php",
                data: {
                    controller: "Account",
                    action: "Login",
                    data: {
                        username: userNameRef.current.value,
                        password: passwordRef.current.value,
                    },
                },
            })
                .then(function (response) {
                    console.log(response.data);
                    // if (response.data !== "valid") {
                        
                    //     setShowError(response.data);
                    //     setTimeout(() => {
                    //         setShowError("");
                    //     }, 1000);
                    // } else {
                    //     setIsLogin(true);
                    //     history.replace("/");
                    // }
                })
                .catch(function (response) {
                    console.log("error");
                });
        } else {
            setShowError("Mời bạn nhập đầy đủ tài khoản và mật khẩu!");
            setTimeout(() => {
                setShowError("");
            }, 1000);
        }
    }

    return (
        <Container className="container-fluid">
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Form className="form-container">
                        <Form.Group className="mb-3">
                            <Form.Label>Tài khoản</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tài khoản của bạn" ref={userNameRef} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control type="password" placeholder="Nhập mật khẩu của bạn" ref={passwordRef} />

                            <Form.Text className="text-muted">
                                <Link to="/forgotpassword"> Quên mật khẩu? </Link>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Text className="text-muted">
                                Chưa có tài khoản? <Link to="/register"> Đăng ký </Link>
                            </Form.Text>

                        </Form.Group>
                        <Button variant="danger" size="lg" type="submit" onClick={handleOnClick}>
                            Đăng nhập
                        </Button>
                    </Form>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <img className="login-img" src={imgLogin}></img>
                </Col>
            </Row>
            {showError && (
                <div class="alert alert-danger mt-2 faded">
                    <strong>{showError}</strong>
                </div>
            )}
        </Container>
    )

}
export default Login;