import React,{useContext} from 'react';
import {InventoryContext} from "../context/inventorycontext";

const Dashboard = () => {
 const {initial} = useContext(InventoryContext);

 const totalStock = initial.inventory?.reduce((acc, value) => {
    return acc + value.stock;
  }, 0);

  const totalDelivered = initial.inventory?.reduce((acc, value) => {
    return acc + value.delivered;
  }, 0);

  const itemsLowInStock = initial.inventory?.reduce((acc, value) => {
    return value.stock <= 10 ? acc + 1 : acc;
  }, 0);


  return (
    <div>
{/* {totalStock} ,{totalDelivered} ,{itemsLowInStock} */}
<div className="dashboard">
      <div className="cards">
        <h3 className="stock">{totalStock}</h3>
        <p>Total Stock</p>
      </div>
      <div className="cards">
        <h3 className="delivered">{totalDelivered}</h3>
        <p>Total Delivered</p>
      </div>
      <div className="cards">
        <h3 className="low">{itemsLowInStock}</h3>
        <p>Low Stock Items</p>
      </div>
    </div>






    </div>
  )
}

export default Dashboard