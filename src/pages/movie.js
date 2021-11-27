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

class Active extends React.Component {
  handleClick = () => this.props.onClick(this.props.index)
  
  render() {
    return <button
      type='button'
      className={
        this.props.isActive ? 'active' : 'album'
      }
      onClick={ this.handleClick }
    >
      <span>{ this.props.name }</span>
    </button>
  }
}
export default class ProductList extends Component {
  state = {
    activeIndex: null
  }

  handleClick = (index) => this.setState({ activeIndex: index })

  render() {
    return (
      <React.Fragment>
        <div className="container" >
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