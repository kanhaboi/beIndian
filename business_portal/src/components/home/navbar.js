import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { cookieHandler } from "../../helper/cookie_handler.js";
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let navData = (cookieHandler.getCookie("login") === "loggedIn")
            ? (
                <>
                    <li className="nav-item border rounded ml-4 ">
                        <a className="nav-link text-white " onClick={() => {
                            cookieHandler.deleteCookies();
                        }} href="http://localhost:3000/">Logout</a>
                    </li>
                </>
            )
            : (
                <>
                    <li className="nav-item border rounded ml-4 ">
                        <a className="nav-link text-white " href="http://localhost:3000/login" >Login</a>
                    </li >
                    <li className="nav-item border rounded ml-4">
                        <a className="nav-link text-white  " href="#">Register</a>
                    </li>
                    <li className="nav-item border rounded ml-4 ">
                        <a className="nav-link text-white " href="http://localhost:5000/auth/google">Login With Google</a>
                    </li>
                </>
            )
        return (
            <Router>

                <nav className="navbar navbar-dark navbar-expand-sm bg-dark ">

                    <ul className="navbar-nav w-100 float-right">
                        {navData}
                    </ul>
                </nav>
            </Router>
        )
    }
}

export default Navbar;