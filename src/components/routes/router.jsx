import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Products from "./../pages/Products";
import Error from "../pages/ErrorBoundary";
import Users from "../pages/Users";
import NotFound from "../pages/404";
import Product from "../pages/Product";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products" element={<Products />}>
        <Route path=":id" element={<Product />}></Route>
      </Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/error" element={<Error />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default Router;
