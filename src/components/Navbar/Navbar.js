import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Navbar.module.css"


const Navbar = () => {
 
  return (
    <nav className={s.navbar}>
      <ul className={s.list}>
        <li>Logo</li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>Categories</li>
        <li>Search</li>
        <button>Sort hight to lower</button>
        <button>Sort lower to hight</button>
      </ul>
      <div className={s.cart}>
        <button>
          <NavLink to="/cart"> Cart </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar