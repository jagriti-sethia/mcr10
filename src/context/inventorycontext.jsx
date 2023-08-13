import React, { createContext, useContext, useEffect, useReducer } from "react";
import { inventoryData } from "../data/inventorydata";
import { inventoryReducer } from "../reducer/inventoryreducer";

export const InventoryContext = createContext(null);



const Inventprovider = ({children})=>{
    const initial = {
        inventory : JSON.parse(localStorage.getItem("inventory"))?.inventory ?? inventoryData,
        filterInventory: JSON.parse(localStorage.getItem("inventory"))?.filterInventory ?? [],
        searchby: JSON.parse(localStorage.getItem("inventory"))?.searchby ?? "",
        Filterbydepartment: JSON.parse(localStorage.getItem("inventory"))?.Filterbydepartment ?? "All",
        showLowStockOnly: JSON.parse(localStorage.getItem("inventory"))?.showLowStockOnly ?? false,
        sortby: JSON.parse(localStorage.getItem("inventory"))?.sortby ?? "name"
        }

        const [state, dispatch] = useReducer(inventoryReducer, initial);




        useEffect(() => {
            localStorage.setItem("inventory ", JSON.stringify(state.inventory));
          }, [state.inventory]);
        
    return(
        <InventoryContext.Provider value={{initial,state, dispatch}}>
            {children}
        </InventoryContext.Provider>
    )
}

export default Inventprovider

