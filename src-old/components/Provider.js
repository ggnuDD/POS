import React, { Component } from "react";

const Context = React.createContext();

class Provider extends Component {
  state = {
    products: [],
    category: "",
    soon: soon,
    showing: showing
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
