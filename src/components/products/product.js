import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../../container/ProductWrapper";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: 0,
      opacity: 1,
      style: {display: 'none'} 
    };
  }

  render() {
    const { id, title, img, length, type } = this.props.product;

    return (
      <ProductWrapper className="col-12 col-md-6 col-lg-3 my-3 col-grid">
        <div className="card prodCard">
          <div className="img-container p-5">
            <div
              onMouseEnter={() => this.setState({ style: {display: 'block', height: '55px'} })}
              onMouseLeave={() => this.setState({ style: {display: 'none'} })}>
              <div className="head-text">
                <div className="head-image">
                  <img src={img} alt="products" className="card-img-top" id={id}/>
                </div >
                <div>
                  <Link
                    class='text-on-image1'
                    to="/payment"
                    style={this.state.style}
                  >
                    <h3  style={{marginTop: '12px'}}>Đặt vé</h3>
                  </Link>
                  <Link 
                    class='text-on-image2'
                    to="/detail"
                    style={this.state.style}
                  >
                    {<h3  style={{marginTop: '12px'}}>Chi tiết</h3>}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <ul className="list-group list-group-flush text-center">
              <Link to="/products/single-movie" className="link">
                <li className="list-group-item" style={{backgroundColor:'#C4A484  ', borderRadius:'0px'}}>
                  <p className="align-self-center mb-0">{title}</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
