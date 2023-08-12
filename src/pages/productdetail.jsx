import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import {InventoryContext} from "../context/inventorycontext";

const Productdetail = () => {
    const { productId } = useParams();
    const {initial} = useContext(InventoryContext);
    const product = initial.inventory.find((item) => item.id === Number(productId));
    if (!product) {
        return <div className="not-found">Product not found.</div>;
      }
  return (
    <div>productdetail

<div className="product-detail">
      <h3 className="product-name">{product.name}</h3>
      <img src={product.imageUrl} alt={product.name} className="image" />
      <p className="price">Price: ${product.price}</p>
      <p className="stockp">Stock: {product.stock}</p>
      <p className="supplierp">Supplier: {product.supplier}</p>
      <p className="departmentp">Department: {product.department}</p>
      <p className="skup">SKU: {product.sku}</p>
      <p className="deliveredp">Delivered: {product.delivered}</p>
      <p className="descriptionp">Description: {product.description}</p>
    </div>
    </div>
  )
}

export default Productdetail