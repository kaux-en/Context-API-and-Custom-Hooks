import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import ProductContext from "../context/ProductContext";
import useInventory from "../hook/useInventory";


const DisplayProducts = () => {

    const { products } = useContext(ProductContext);
    const { removeProduct } = useInventory()


    return (
        <div>
            <h2>Product List</h2>
            <Container>
            <ul>
                {   
                products.map((product) => (
                    <li key={product.name}>    
                        <p>{product.name} - {product.price}</p><button onClick={() => removeProduct(product.name)}>Delete</button>
                    </li>
                ))
                }
            </ul>
            </Container>
        </div>
    )
    
}

export default DisplayProducts;