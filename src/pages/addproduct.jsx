import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import {InventoryContext} from "../context/inventorycontext";

const Addproduct = () => {

  const navigate = useNavigate();
  const {dispatch} = useContext(InventoryContext);
  const [newProduct, setNewProduct] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: ""
  });

  const handleInput  = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) =>{
e.preventDefault();
dispatch({ type: "ADD_PRODUCT", payload: newProduct });

    navigate("/products");
  }

  return (
    <div>
        <div className='addproduct'>
        <h3>Add product</h3>

 <form onSubmit={handleSubmit}>
 <label htmlFor="department">Department:</label>
        <select
          id="department"
          name="department"
          value={newProduct.department}
          onChange={handleInput}
          required
        >
          <option value="">Select Department</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
          <option value="Kitchen">Kitchen</option>
        </select>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newProduct.name}
          onChange={handleInput}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={newProduct.description}
          onChange={handleInput}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          step="0.01"
          id="price"
          name="price"
          value={newProduct.price}
          onChange={handleInput}
          required
        />

        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={newProduct.stock}
          onChange={handleInput}
          required
        />

        <label htmlFor="sku">SKU:</label>
        <input
          type="text"
          id="sku"
          name="sku"
          value={newProduct.sku}
          onChange={handleInput}
          required
        />

        <label htmlFor="supplier">Supplier:</label>
        <input
          type="text"
          id="supplier"
          name="supplier"
          value={newProduct.supplier}
          onChange={handleInput}
          required
        />

        <label htmlFor="delivered">Delivered:</label>
        <input
          type="number"
          id="delivered"
          name="delivered"
          value={newProduct.delivered}
          onChange={handleInput}
          required
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={newProduct.imageUrl}
          onChange={handleInput}
          required
        />

        <button type="submit">Add Product</button>


 </form>

        </div>



    </div>
  )
}

export default Addproduct