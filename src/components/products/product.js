import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../../container/ProductWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: 0
    };
  }

  render() {
    const { id, title, img, length, type } = this.props.product;
    return (
      <ProductWrapper className="col-12 col-md-6 col-lg-3 my-3 col-grid">
        <div className="card prodCard">
          <div className="img-container p-5">
            <Link to="/products/single-movie">
              <div className="head-text">
                <div className="head-image">
                  <img src={img} alt="products" className="card-img-top" id={id} />
                </div>
                <div
                  class='text-on-image1'
                  onMouseEnter={() => this.setState({ count: this.state.hover + 1 })}
                  onMouseLeave={() => this.setState({ count: this.state.hover - 1 })}
                  to="/payment"
                >
                  <h3>Đặt vé</h3>
                </div>
                <div 
                  class='text-on-image2'
                  onMouseEnter={() => this.setState({ count: this.state.hover + 1 })}
                  onMouseLeave={() => this.setState({ count: this.state.hover - 1 })}
                  to="/detail"
                >
                  {<h3>Chi tiết</h3>}
                </div>
              </div>
            </Link>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <ul className="list-group list-group-flush text-center">
              <Link to="/products/single-movie" className="link">
                <li className="list-group-item" style={{backgroundColor:'white', borderRadius:'0px'}}>
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
