import React, { Component } from 'react';
import {Link} from "react-router-dom";
export class Navbar extends Component {

    render() {
        let location = window.location;
        return (
        <nav className="pcoded-navbar">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                    <Link className="b-brand" to="/">
                        <img width="100" alt="Lecare Logo" src={process.env.PUBLIC_URL + "/assets/images/lecare_logo.png"}/>
                    </Link>
                    <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span> </span></a>
                </div>
                <div className="navbar-content scroll-div">
                    <ul className="nav pcoded-inner-navbar">
                        <li className={location.pathname === '/' ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" to="/">
                                <span className="pcoded-micon">
                                    <i className="feather icon-bar-chart-2"></i>
                                </span>
                                <span className="pcoded-mtext">Legal Dashboard</span>
                            </Link>
                        </li>
                        <li className={location.pathname === '/settings' ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" to="/settings">
                                <span className="pcoded-micon">
                                    <i className="feather icon-settings"></i>
                                </span>
                                <span className="pcoded-mtext">Administration Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>);
    }
}
