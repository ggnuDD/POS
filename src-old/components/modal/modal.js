import React from "react";
import { Consumer } from "../products/content";
import { Link } from "react-router-dom";
import { ModalWrapper } from "./modalWrapper"
export default class Modal extends React.Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { id, title, type, src, price} = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalWrapper className="modal-container">
                                <ModalWrapper className="modal-container">
                                    <div className="modal-card">
                                        <div className="container h-auto d-inline-block">
                                            <div className="modal-title">
                                                <h3 className="text-muted">Detail</h3>
                                                <Link to="/">
                                                    <button className="btn btn-outline-secondary close-btn" onClick={() => closeModal()}><i class="fas fa-times"></i></button>
                                                </Link>
                                            </div>
                                            <div className="modal-img-container">
                                                <img src={src} className="img-fluid" alt="modal" />
                                            </div>
                                            <div className="modal-content d-flex">
                                                <p><strong>{title}</strong></p>
                                                <div className="d-flex justify-content-center">
                                                    <p className="modal-type mx-3">{type[0].type}</p>
                                                </div>
                                            </div>
                                            <div className="modal-detail">
                                                <div className="d-flex flex-row justify-content-center cart-item-btns-container">
                                                    <button className="btn btn-primary btn-sm mx-2 cart-item-btn" onClick={() => value.increase(id)}><i class="fa fa-plus" aria-hidden="true"></i></button>
                                                </div>
                                                <button className="btn btn-primary add-cart-btn" onClick={() => value.addToCart(id)}><span className="fa fa-cart-plus" /> {price} VND</button>
                                            </div>
                                        </div>
                                    </div>
                                </ModalWrapper>
                            </ModalWrapper>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

