import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Details from "../../Pages/Products/Details";
import Products from "../../Pages/Products/Products";
import Category from "../../Pages/Products/Category";
import Login from "../../Pages/Login/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />}>
          <Route path=":category" element={<Category />}>
            <Route path=":id" element={<Details />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />}/>
    </Routes>
  );
};

export default AppRouter;
