import React, { Component } from "react";
import { movieArray } from "../../data/HomePage/Data";
import { showing } from "../../data/ProductData/showing";
import { soon } from "../../data/ProductData/soon";

const Context = React.createContext();

class Provider extends Component {
  state = {
    products: soon,
    soon: soon,
    showing: showing,
    category: ""
  };

  setProducts = (data) => {
    let tempProducts = [];
    data.forEach(item => {
      const it = { ...item };
      tempProducts = [...tempProducts, it];
    });
    this.setState({
      products: tempProducts
    })
  }

  setTitle = (title) => {
    this.setState({
      category: title
    })
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          setProducts: this.setProducts,
          setTitle: this.setTitle
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
