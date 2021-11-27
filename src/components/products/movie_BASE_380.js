import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../../container/ProductWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import LayeredImage from "react-layered-image";
export default class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: 0,
      style2: {marginTop: '-420px', height: '380px', opacity: '0'} ,
      style: {display: 'none'} 
    };
  }

  render() {
    const { id, title, img, type, length, show } = this.props.product;
    const hover = this.state.hover;


    return (
      <ProductWrapper className="col-12 col-md-6 col-lg-3 my-3 col-grid">
        <div className="card prodCard" style={{height: '600px'}}>
          <div className="img-container p-5">
            <div
              onMouseEnter={() => this.setState({ style: {display: 'block'}, count : hover + 1} )}
              onMouseLeave={() => this.setState({ style: {display: 'none'}, count : hover - 1} )}>
              <div className="head-text">
                <div className="head-image">
                  <img src={img} alt="products" className="card-img-top" id={id}/>
                   
                </div >
                <div>
                  <Link
                    class='text-on-image1'
                    to="/payment"
                    style={this.state.style}>
                      <h3>Mua vé</h3>
                  </Link>
                  <Link 
                    class='text-on-image2'
                    to="/detail"
                    style={this.state.style}>
                      <h3>Chi tiết</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <ul className="list-group list-group-flush text-center">
              <Link to="/products/single-movie" className="link">
                <li className="list-group-item" style={{backgroundColor:'#C4A484', borderRadius:'0px'}}>
                  <p className="align-self-center mb-0">{title}</p>
                  <div style={{color:'black', paddingTop: '10px'}}>
                    <span style={{fontWeight: 'bold'}} >Thể loại: </span>
                      {type.map(function(item,index) {
                        return <span key={`demo_snap_${index}`}>{ (index ? ', ' : '') + item }</span>
                      })}
                  </div>
                  <div style={{color:'black', paddingTop: '10px'}}>
                    <span style={{fontWeight: 'bold'}} >Thời lượng:</span><span> {length} </span>
                  </div>
                  <div style={{color:'black', paddingTop: '10px'}}>
                    <span style={{fontWeight: 'bold'}} >Khởi chiếu:</span><span> {show} </span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
