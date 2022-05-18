import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users/explore">Explore</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className= "nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdownID" data-toggle= "dropdown">Shop</a>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/shop">Products</Link>
                        <Link className="dropdown-item" to="/shop/cart">Cart</Link>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/users/signin">Sign In</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users/logout">Log Out</Link>
                </li>
            </ul>
        </div>
    </nav>
)
b4-nav-def
}