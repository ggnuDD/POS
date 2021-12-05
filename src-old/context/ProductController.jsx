// import { useState, createContext, useEffect } from "react";
// import axios from "axios";

// export const ProductController = createContext();

// const ProductProvider = ({ children }) => {
//     const [products, setProducts] = useState([]);
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         axios({
//             method: "post",
//             url: "http://localhost/Project/GIT_DOAN/DoAnCNPM/client/server/index.php",
//             dataType: "json",
//             data: {
//                 controller: "Product",
//                 action: "getAllProduct",
//             },
//         })
//             .then(function (response) {
//                 setProducts(response.data);
//             })
//             .catch(function (response) {
//                 //handle error
//                 console.log("error");
//             });
//         // const url = "https://mysterious-caverns-04457.herokuapp.com/product?fbclid=IwAR2WygSH4EIkoCEbDXgS17MEZhKNERCb2T2RE9l-z_T5i-TU8jm6fkp3VFc";
//         // axios
//         //     .get(url)
//         //     .then((response) => {
//         //         console.log(response.data);
//         //         setProducts(response.data);
//         //     })
//         //     .catch((error) => console.log(error));
//     }, []);

//     const changeProductAmountInCart = (product, bonus = 1) => {
//         const foundItems = cartItems.filter((cartItem) => cartItem._id === product._id);

//         if (foundItems.length > 0) {
//             foundItems[0].amount += bonus;
//             foundItems[0].amount = foundItems[0].amount > 0 ? foundItems[0].amount : 0;
//             console.log(cartItems);
//             setCartItems([...cartItems]);
//         } else {
//             bonus = bonus > 0 ? bonus : 0;
//             let item = { ...product, amount: bonus };
//             setCartItems([...cartItems, item]);
//         }
//     };

//     const getTotal = () => {
//         let sum = 0;

//         cartItems.forEach((item) => (sum += item.price * item.amount));

//         return sum;
//     };
//     const data = {
//         products,
//         setProducts,
//         cartItems,
//         changeProductAmountInCart,
//         getTotal,
//     };

//     return <ProductController.Provider value={data}>{children}</ProductController.Provider>;
// };

// export default ProductProvider;
