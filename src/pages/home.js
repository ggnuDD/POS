import React, { Component } from "react";
import { movieArray } from "../data/HomePage/Data";
import { productList } from "../data/ProductData/soon";
import { featureProd } from "../data/ProductData/showing";
import ProductListSlide from "../components/homeComponents/productListSlide/productListSlide";
import SimpleSlider from '../components/slider';


const ad1 =
  "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/p/o/poster-tthm-rerun_1__1.jpg";
const ad2 =
  "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/p/o/poster_kntc_05.11.21_1__1.jpg";
const ad3 =
  "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/p/o/poster-nobody-cgv_1.jpg";
const ad4 =
  "https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/b/l/black_widow_-_final_poster_1__1.jpg";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <SimpleSlider />
          <div style={{height:"50px", backgroundColor: '#C4A484'}}></div>
          <ProductListSlide
            title="Phim đang chiếu"
            dataList={movieArray}
          />
          <ProductListSlide title="Phim sắp chiếu" dataList={productList} />
        </div>
      </>
    );
  }
}
