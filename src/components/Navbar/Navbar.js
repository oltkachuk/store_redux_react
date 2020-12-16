import React from "react"
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom"
import Search from "../../containers/Search"
import { changedPageCountAction, goHomeAction } from "../../redux/porduct/productActions";
import s from "./Navbar.module.css"


const Navbar = (props) => {
  let search = props.queryParams.search
  let pageSize = props.queryParams.pageSize
  let page = 1

  return (
    <nav className={s.navbar}>
      <ul className={s.list}>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={() => props.changedPageCountAction({search, pageSize, page})}>Домашня</Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categories">Категорії</NavLink>
        </li>
        <Search />
      </ul>
      <div className={s.cart}>
        <ul className={s.list}>
          <li className="nav-item">
            <NavLink className="nav-link" to="/favorites">
            Улюблені
          </NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="/cart"> Корзина </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}


const mapStateToProps = (state) => ({ ...state.product })

export default connect(mapStateToProps, {
  goHomeAction,
  changedPageCountAction
})(withRouter(Navbar))