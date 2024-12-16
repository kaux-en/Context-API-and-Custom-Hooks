import React, { useState }  from "react";
import useInventory from "../hook/useInventory";


const ProductForm = () => {
    const { addProduct } = useInventory()
    const [product, setProduct] = useState({
        name: "",
        price: ""
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newProduct = { name: product.name, price: product.price };
        addProduct;
        console.log(newProduct)
        setProduct({ name: "", price: "" });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    return (
        <div>
            <h2>Add Product Form</h2>
            <form onSubmit={handleOnSubmit}>
                <label>Product name</label>
                <input 
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                     />
                <label>Product Price</label>
                <input 
                    type="float"
                    name="price"
                    value={product.price} 
                    onChange={handleInputChange}
                    />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default ProductForm;