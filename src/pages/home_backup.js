import React, { Component } from "react";
import { movieArray } from "../data/HomePage/Data";
import { productList } from "../data/ProductData/soon";
import { featureProd } from "../data/ProductData/showing";
import ProductListSlide from "../components/homeComponents/productListSlide/productListSlide";
import { PaginationProvider, PaginationContext } from "../components/products/Pagination";
import Pagination_n from "../components/products/pagination_n";
import Movie from "../components/products/movie";
import { Consumer } from "../components/products/content";
import Tabs from "../components/tabs/Tabs";
import SimpleSlider from '../components/slider';
import "../components/tabs/style.css";

export default class Home extends Component {
  state = {
    products: movieArray
  };
  render() {
    return (
      <div>
        <div className="container">
          <SimpleSlider />
          <div style={{height:"250px", backgroundColor: '#C4A484'}}></div>
            <Tabs>
              <div label = "Phim đang chiếu">
              <ProductListSlide
                  title="Phim đang chiếu" 
                  dataList={featureProd}/>
              </div>
              <div label = "Phim sắp chiếu">
                <ProductListSlide
                  title="Phim sắp chiếu" 
                  dataList={featureProd}/>
              </div>
            </Tabs>
        </div>
      </div>
    );
  }
}