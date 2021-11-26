import React, { Component, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ListWrapper,
  ListTitle,
  AdContainer,
  AdContainerRow,
  ListBtn,
  ListTitleRow,
  AdImage,
} from "../homePageElements";
import Product from "../../products/product";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../style.css"

function Lst(props) {
  let list_products = [];
  if (typeof props.dataList === "object") {
    list_products = props.dataList;
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const arrowStyle = {
    background: "transparent",
    border: "solid white",
    backgroundColor: "white",
    borderRadius: "20px",
    color: "black",
    fontSize: "7px",
    marginTop: "-30px",
    marginLeft: "0px"
  };

  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick} style={arrowStyle}>
      <ArrowForwardIcon style={{ fontSize: "50px" }} />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick} style={arrowStyle}>
      <ArrowBackIcon style={{ fontSize: "50px" }} />
    </button>
  );

  let item = list_products.map((product) => {
    return (
      <div>
        <Product key={product.id} product={product} />
      </div>
    );
  });

  return (
  <div id="main-slide" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <Carousel
        responsive={responsive}
        draggable={false}
        swipeable={false}
        infinite={true}
        customRightArrow= {<CustomRight />}
        customLeftArrow= {<CustomLeft />}
        renderButtonGroupOutside={true}
      >
      {item}
      </Carousel>;
    </div>
  </div>
  );

}
<img src="/background.jpg" />
function ProductListSlide(props) {
  return (
    <ListWrapper style={{backgroundColor:'#C4A484'}}>
      <ListTitleRow>
        <ListTitle>{props.title}</ListTitle>
        <ListBtn to="/showing">Xem thêm</ListBtn>
      </ListTitleRow>
      <div className="row">
        <Lst dataList={props.dataList} />
      </div>
    </ListWrapper>
  );
}

export default ProductListSlide;
