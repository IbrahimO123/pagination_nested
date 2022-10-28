import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Products from "./../pages/Products";
import Error from "../pages/Error";
import Users from "../pages/Users";
import NotFound from "../pages/404";
import Product from "../pages/Product";
import { ErrorBoundary } from "react-error-boundary";
import { Typography } from "@mui/material";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <Typography component="div" variant="h4">
        Something went wrong:
      </Typography>
      <pre>{error.message}</pre>
      <button
        style={error ? { backgroundColor: "green" } : null}
        className="explode"
        onClick={resetErrorBoundary}
      >
        Reset
      </button>
    </div>
  );
}

function Router() {
  const [explode, setExplode] = useState(false);
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setExplode(false)}
      resetKeys={[explode]}
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<Product />}></Route>
        </Route>
        <Route path="/users" element={<Users />}></Route>
        <Route
          path="/error"
          element={<Error setExplode={setExplode} explode={explode} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default Router;
