import React, { Component } from "react";
import { movieArray } from "../../data/HomePage/Data";
import { showing } from "../../data/ProductData/showing";
import { soon } from "../../data/ProductData/soon";

const Context = React.createContext();

class Provider extends Component {
  state = {
    products: [],
    soon: soon,
    showing: showing,
    cart: [],
    cartTotal: 0,
    category: "",
    modalOpen: false,
    modalProduct: movieArray[0],
  };


    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        movieArray.forEach(item => {
            const it = { ...item };
            tempProducts = [...tempProducts, it];
        });
        this.setState({
            products: tempProducts
        })
    }

    getItem = id => {
        const item = this.state.products.find((product) => product.id === id);
        return item;
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.count = product.count + 1;
        product.total = product.count * product.PRICE;
        if (tempCart.includes(product)) {
          this.setState(
            {
              products: tempProducts,
              cart: [...this.state.cart],
            },
            () => {
              this.calTotal();
            }
          );
        } else {
          this.setState(
            {
              products: tempProducts,
              cart: [...this.state.cart, product],
            },
            () => {
              this.calTotal();
            }
          );
        }
      };

    increase = id => {
        let tempCart = [...this.state.cart];
        const tempProd = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(tempProd);
        const prod = tempCart[index];
        prod.count = prod.count + 1;
        prod.total = prod.count * prod.price;
        this.setState(
            () => {
                return {
                    cart: [...tempCart]
                };
            },
            () => {
                this.calTotal();
            }
        )
    };

    decrease = id => {
        let tempCart = [...this.state.cart];
        const tempProd = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(tempProd);
        const prod = tempCart[index];
        prod.count = prod.count - 1;
        if (prod.count === 0) {
            this.setState(
                () => {
                    this.remove(id);
                }
            )
        }
        prod.total = prod.count * prod.price;
        this.setState(
            () => {
                return {
                    cart: [...tempCart]
                };
            },
            () => {
                this.calTotal();
            }
        )
    };

    remove = id => {
        let tempProds = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProds.indexOf(this.getItem(id));
        const delProd = tempProds[index];
        delProd.count = 0;
        delProd.total = 0;
        this.setState(
            () => {
                return {
                    cart: [...tempCart],
                    products: [...tempProds]
                };
            },
            () => {
                this.calTotal();
            }
        )
    };

    clearCart = () => {
        this.setState({
            cart: []
        },
        () => {
        this.setProducts();
        this.calTotal();
        }
    )};

    calTotal = () => {
        let total = 0;
        this.state.cart.map(item => (total += item.total));
        this.setState(()=> {
            return {
                cartTotal: total
            }
        })
    }

    test = () => {
        console.log("Test")
    }

    openModal = (id) => {
        const prod = this.getItem(id);
        console.log("bruh");
        this.setState(() => {
            return { modalProduct: prod, modalOpen: true };
        })
    }

    closeModal = (id) => {
        this.setState(() => {
            return { modalOpen: false };
        })
    }
    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                getItem: this.getItem,
                increase: this.increase,
                decrease: this.decrease,
                remove: this.remove,
                clearCart: this.clearCart,
                calTotal: this.calTotal,
                openModal: this.openModal,
                closeModal: this.closeModal,
                test: this.test
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }   
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
