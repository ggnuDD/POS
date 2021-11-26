import React, { Component } from "react";
import { movieArray } from "../data/HomePage/Data";
import { soon } from "../data/ProductData/soon";
import { showing } from "../data/ProductData/showing";
import ProductListSlide from "../components/homeComponents/productListSlide/productListSlide";
import SimpleSlider from '../components/homeBanner';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <SimpleSlider />
          <div style={{height:"250px", backgroundColor: '#C4A484'}}></div>
          <ProductListSlide
            title="Phim đang chiếu"
            dataList={movieArray}
          />
          <ProductListSlide
            title="Phim sắp chiếu" 
            dataList={showing}/>
        </div>
      </>
    );
  }
}
