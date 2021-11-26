import React, { Component } from "react";
import { movieArray } from "../../data/HomePage/Data";
import { featured } from "../../data/HomePage/Feature";
const Context = React.createContext();

class Provider extends Component {
  state = {
    products: featured,
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state.products,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
