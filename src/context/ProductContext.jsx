import React from "react";


const ProductContext = React.createContext({
    products: [
        {name: 'product1', price: '10.99'},
        {name: 'product2', price: '12.50'},
        {name: 'product3', price: '15.99'},
        {name: 'product4', price: '18.99'},
        {name: 'product5', price: '21.50'},
    ],
    setProducts: () => {}
})

export default ProductContext;
        