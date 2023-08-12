import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/nav';
import Dashboard from "./pages/dashboard";
import Department from "./pages/department";
import Product from "./pages/product";
import Productdetail from "./pages/productdetail";
import Addproduct from "./pages/addproduct";

function App() {
  return (
    <div className="App">
    
      <Nav/>
     

      <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/department" element={<Department />} />
              <Route path="/products" element={<Product />} />
              <Route path="/product/:productId" element={<Productdetail/>} />
              <Route path="/product/add" element={<Addproduct />} />
              </Routes>
    </div>
  );
}

export default App;
