import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { InventoryContext } from '../context/inventorycontext';


const Department = () => {
  const navigate = useNavigate();
    const { state, dispatch } = useContext(InventoryContext);

    const department = state.inventory.reduce((acc, value) => { 
        return  acc.includes(value.department) ? acc : [...acc, value.department] }, []);

        const handleDepartment = (department) => {
          dispatch({
            type: "FILTER_PRODUCTS",
            payload: {
              searchby: state.searchby,
              department: department,
              showLowStockOnly: state.showLowStockOnly
            }
          });
          navigate("/products");
        };


    return (
        <div> <div className="department">
        {department.map((item) => {
          return (
            <div
              className="deptcard"
              key={item}
              onClick={() => handleDepartment(item)}
            >
              <h3 className="deptname">{item}</h3>
            </div>
          );
        })}
      </div></div>
    )
}

export default Department