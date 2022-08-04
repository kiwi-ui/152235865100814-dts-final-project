import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import ChosenProduct from "./components/ChosenProduct";
import Header from "./components2/Header";
import ProductComponent from "./components2/ProductComponent";
import ProductListing from "./components2/ProductListing";
import ProductDetail from "./components2/ProductDetail";
// import Home from "./components/Home";
// import { ReactDOM } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <ProductListing />
      <Routes>
        <Route path={`/product/:productId`} element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
