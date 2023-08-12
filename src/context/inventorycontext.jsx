import React, { createContext, useContext, useEffect, useReducer } from "react";
import { inventoryData } from "../data/inventorydata";
import { inventoryReducer } from "../reducer/inventoryreducer";

export const InventoryContext = createContext(null);



const Inventprovider = ({children})=>{
    const initial = {
        inventory : localStorage.getItem("inventory")?.inventory ?? inventoryData,
        filterInventory: [],
        searchby: "",
        Filterbydepartment: "All",
        showLowStockOnly: false,
        sortby: "name"
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

