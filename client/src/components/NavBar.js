import React, { Component } from 'react'
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
                <div className="navBar">
                        <nav>
                            <ul className="navLinks">
                                <Link to="/">
                                    <li> homePage </li>
                                </Link>
                                <Link to="/admin">
                                    <li> admin's page</li>
                                </Link>
                                <Link to="/login">
                                    <li> login</li>
                                </Link>
                                {/* <Link to="/register">
                                    <li> Register</li>
                                </Link> */}
                            </ul>
                        </nav>
                </div>
        )
    }
}

export default NavBar
