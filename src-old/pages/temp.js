import React, { Component } from "react";
import { showing } from "../data/ProductData/showing";
import { soon } from "../data/ProductData/soon";
import { featured } from "../data/HomePage/Feature";
import Movie from "../components/products/movie";
import { Consumer } from "../components/products/content";
import Tabs from "../components/tabs/Tabs";
import "../components/tabs/style.css";
import './ProductStyle/ProductListStyle.css'

const Page = ({props}) => {
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
export default class ProductList1 extends Component {
  state = {
    list1: showing,
    list2: soon
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Tabs>
            <div label = "Phim đang chiếu" className="row">
              <Consumer>
                {value => (<Page props={value.list1}/>)}
              </Consumer>
            </div>
            <div label = "Phim sắp chiếu" className="row">
              <Consumer>
                {value => (<Page props={value.list2}/>)}
              </Consumer>
            </div>
          </Tabs>
        </div>
      </React.Fragment>
    )
  }
}