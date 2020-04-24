import React, { Component } from 'react';
export class Navbar extends Component {
    render() {
        return (
        <nav className="pcoded-navbar">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                    <a href="index.html" className="b-brand">
                        <img width="100" src={process.env.PUBLIC_URL + "/assets/images/lecare_logo.png"}/>
                    </a>
                    <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span> </span></a>
                </div>
                <div className="navbar-content scroll-div">
                    <ul className="nav pcoded-inner-navbar">
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                            className="nav-item active">
                            <a href="index.html" className="nav-link">
                                <span className="pcoded-micon">
                                    <i className="feather icon-home"></i>
                                </span>
                                <span className="pcoded-mtext">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>);
    }
}
