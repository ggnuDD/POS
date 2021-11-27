import React from "react";
import { Consumer } from "../products/content";
import { Link } from "react-router-dom";
import { ModalWrapper } from "./modalWrapper";
export default class Modal extends React.Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    const { modalOpen, closeModal } = value || {};
                    const { id, src, title, type } = value.modalProduct || {};

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalWrapper className="modal-container">
                                <div className="modal-card">
                                <div className="container h-auto d-inline-block">
                                    <div className="modal-img-container">
                                        <img src={src} className="img-fluid" alt="modal" />
                                    </div>
                                    <div className="modal-content d-flex">
                                        <p><strong>{title}</strong></p>
                                    </div>
                                    <div className="modal-detail">
                                        <p>Thể loại: {type.map(item => {return <li>{item}</li>})}</p>
                                        <Link to="/">
                                            <button className="btn btn-primary close-btn" onClick={()=>closeModal()}>Close</button>
                                        </Link>
                                        <button className="btn btn-primary add-cart-btn" onClick={()=>value.addToCart(id)}><span className="fa fa-cart-plus" /></button>
                                        </div>
                                    </div>
                                </div>
                            </ModalWrapper>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

