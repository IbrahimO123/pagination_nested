import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
      <h3>This is the Album Page</h3>
      <p>Click on each link to view each photo </p>
      <ul>
        <NavLink className="product-navlink" to="/products/1">Photo 1</NavLink>
        <NavLink className="product-navlink" to="/products/2">Photo 2</NavLink>
        <NavLink className="product-navlink" to="/products/3">Photo 3</NavLink>
        <NavLink className="product-navlink" to="/products/4">Photo 4</NavLink>
        <NavLink className="product-navlink" to="/products/5">Photo 5</NavLink>
      </ul>
      <Outlet/>
      <em>We hope you enjoy your visit here....</em>
    </div>
  );
}

export default Products