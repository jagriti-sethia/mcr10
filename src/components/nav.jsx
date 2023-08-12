import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    const getActiveStyle = ({ isActive }) => ({
        margin: "1rem 0",
        padding: "1rem",
        fontWeight: isActive ? "600" : "200",
        color: isActive ? "white" : ""
      });
  return (
    
        <div className='nav'>
            <NavLink style={getActiveStyle} to="/">Dashboard</NavLink>
            <NavLink style={getActiveStyle} to="/department">
              Departments
            </NavLink>
            <NavLink style={getActiveStyle} to="/products">
              Products
            </NavLink>
        
    </div>
  )
}

export default Nav