import React, { useContext } from "react"
import ProductContext from "../context/ProductContext";


function useInventory() {
    const { products, setProducts } = useContext(ProductContext)

    const RemoveProduct = (productName) => {
        const updatedProducts = products.filter(product => product.name !== productName)
        setProducts(updatedProducts)
    };

    const AddProduct = (newProduct) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
    };


    return (
        <div>
            { products }
            { AddProduct } 
            { RemoveProduct } 
        </div>
    )
}

export default useInventory;