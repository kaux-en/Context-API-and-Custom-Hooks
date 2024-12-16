import React, { useContext } from "react"
import ProductContext from "../context/ProductContext";


function useInventory() {
    const { products, setProducts } = useContext(ProductContext)

    const removeProduct = (productName) => {
        console.log(productName)
        const updatedProducts = products.filter(product => product.name !== productName)
        setProducts(updatedProducts)
    };

    const addProduct = (newProduct) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
    };


    return (
        
            { products },
            { addProduct }, 
            { removeProduct } 
        
    )
}

export default useInventory;