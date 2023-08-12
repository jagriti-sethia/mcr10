export const inventoryReducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        const newProductId = state.inventory.length + 1;
        const newProduct = {
          id: newProductId,
          ...action.payload
        };
        localStorage.setItem("inventory", JSON.stringify([...state.inventory, newProduct]));
        return {
          ...state,
          inventory: [...state.inventory, newProduct]
        };
  
      case "FILTER_PRODUCTS":
        return {
          ...state,
          searchby: action.payload.searchby,
          Filterbydepartment: action.payload.department,
          showLowStockOnly: action.payload.showLowStockOnly,
          filterInventory: state.inventory.filter(
            (product) =>
              product.name
                .toLowerCase()
                .includes(action.payload.searchby.toLowerCase()) &&
              (action.payload.department === "All" ||
                product.department === action.payload.department) &&
              (!action.payload.showLowStockOnly || product.stock <= 10)
          )
        };
  
      case "SORT_PRODUCTS":
        return {
          ...state,
          sortby: action.payload,
          filterInventory: [...state.filterInventory].sort((a, b) => {
            if (action.payload === "name") {
              return a.name.localeCompare(b.name);
            } else if (action.payload === "price") {
              return a.price - b.price;
            } else if (action.payload === "stock") {
              return a.stock - b.stock;
            }
            return 0;
          })
        };
  
      default:
        return state;
    }
  };