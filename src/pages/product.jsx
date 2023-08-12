import React ,{useContext, useEffect} from 'react';
import {InventoryContext} from "../context/inventorycontext";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
    const {state,dispatch} = useContext(InventoryContext);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({
          type: "FILTER_PRODUCTS",
          payload: {
            searchby: state.searchby,
            department: state.Filterbydepartment,
            showLowStockOnly: state.showLowStockOnly
          }
        });
        dispatch({
          type: "SORT_PRODUCTS",
          payload: state.sortby
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [
        state.searchby,
        state.Filterbydepartment,
        state.showLowStockOnly,
        state.sortby
      ]);
    return (
        <div className='productlist'>
            <div className='productHeader'>
                <h4>Products</h4>
                <input type="text" placeholder='search here...' 
                value={state.searchby}
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_PRODUCTS",
                    payload: {
                      searchby: e.target.value,
                      department: state.Filterbydepartment,
                      showLowStockOnly: state.showLowStockOnly
                    }
                  })
                }
                />
                <select
                 value={state.Filterbydepartment}
                 onChange={(e) =>
                   dispatch({
                     type: "FILTER_PRODUCTS",
                     payload: {
                       searchby: state.searchby,
                       department: e.target.value,
                       showLowStockOnly: state.showLowStockOnly
                     }
                   })
                 }
                >

                    <option value="All">All Departments</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>

                </select>
                <label ><input type="checkbox" 
                 checked={state.showLowStockOnly}
                 onChange={() =>
                   dispatch({
                     type: "FILTER_PRODUCTS",
                     payload: {
                       searchby: state.searchby,
                       department: state.Filterbydepartment,
                       showLowStockOnly: !state.showLowStockOnly
                     }
                   })
                 }
                /> Low stock item </label>
                <select 
                 value={state.sortby}
                 onChange={(e) =>
                   dispatch({
                     type: "SORT_PRODUCTS",
                     payload: e.target.value
                   })
                 }
                >

                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>

                </select>
                <button
                    className="product-listbutton"
                    onClick={() => {
                        navigate("/product/add");
                    }}
                >
                    New
                </button>

            </div>

            <table className="producttable">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {state.filterInventory.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="productimage"
                />
              </td>
              <td>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
}

export default Product