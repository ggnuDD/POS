import React, { Component } from "react";
import { showing } from "../data/ProductData/showing";
import { soon } from "../data/ProductData/soon";
import Movie from "../components/products/movie";
import { Consumer } from "../components/products/content";
import Tabs from "../components/tabs/Tabs";
import "../components/tabs/style.css";
import './ProductStyle/ProductListStyle.css'
import { movieArray } from "../data/HomePage/Data";
import { featured } from "../data/HomePage/Feature";

const Showing = () => {
    return (
      <>
        <Consumer>
          {value => {
                  return value.showing.map(product => {
                    return <Movie key={product.id} product={product} />
                  })
                }}
        </Consumer>
      </>
  )
}
const Soon = () => {
  return (
    <>
      <Consumer>
        {value => {
                return value.soon.map(product => {
                  return <Movie key={product.id} product={product} />
                })
              }}
      </Consumer>
    </>
)
}
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Tabs>
            <Consumer label = "Phim đang chiếu" className="row">
              <Showing/>
            </Consumer>
            
            <Consumer label = "Phim sắp chiếu" className="row">
             <Soon/>
            </Consumer>
          </Tabs>
        </div>
      </React.Fragment>
    )
  }
}