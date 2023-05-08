import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Details from "../../Pages/Products/Details";
import Products from "../../Pages/Products/Products";
import Category from "../../Pages/Products/Category";
import Shop from "../../Pages/Products/Shop";

const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/shop" element={<Shop />}>
        <Route path=":products" element={<Products />}>
          <Route path=":category" element={<Category />}>
            <Route path=":id" element={<Details />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
