import React, { Component } from "react";
import { productList } from "../data/ProductData/soon";
import { featureProd } from "../data/ProductData/showing";
import Movie from "../components/products/movie";
import { Consumer } from "../components/products/content";
import Tabs from "../components/tabs/Tabs";
import "../components/tabs/style.css";
import './ProductStyle/ProductListStyle.css'

const Page = (props) => {
  let value = [];
  if (typeof props.dataList === "object") {
    value = props.dataList;
  }
    return (
      <>
        <Consumer>
          {value => {
                  return value.products.map(product => {
                    return <Movie key={product.id} product={product} />
                  })
                }}
        </Consumer>
      </>
  )
}
export default class ProductList extends Component {
  state = {
    products: this.value
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Tabs>
            <div label = "Phim đang chiếu" className="row">
              <Page value={featureProd}/>
            </div>
            <div label = "Phim sắp chiếu" className="row">
              <Page value={productList}/>
            </div>
          </Tabs>
        </div>
      </React.Fragment>
    )
  }
}