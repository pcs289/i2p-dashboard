import React, { Component } from 'react';
const $ = window.$;

export class Header extends Component {

    toggleMobileNavbar() {
        console.log('Toggle');
        $('.pcoded-navbar').toggleClass('mob-open');
    }

    render() {
        return (
            <header className="navbar pcoded-header navbar-expand-lg navbar-light">
                <div className="m-header">
                    <a className="mobile-menu" id="mobile-collapse1" onClick={() => this.toggleMobileNavbar()}><span></span></a>
                    <a href="" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-bar-chart-2"></i>
                        </div>
                        <span className="b-title">Legal Dashboard</span>
                    </a>
                </div>
                <a className="mobile-menu" id="mobile-header" href="javascript:">
                    <i className="feather icon-more-horizontal"></i>
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <b className="mr-4">Filter:</b>
                            <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown"
                            >This Month</a
                            >
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="javascript:">This Week</a></li>
                                <li>
                                    <a className="dropdown-item" href="javascript:">This Month</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:">This Year</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <div className="dropdown">
                                <a
                                    className="dropdown-toggle"
                                    href="javascript:"
                                    data-toggle="dropdown"
                                ><i className="icon feather icon-bell"></i
                                ></a>
                                <div className="dropdown-menu dropdown-menu-right notification">
                                    <div className="noti-head">
                                        <h6 className="d-inline-block m-b-0">Notifications</h6>
                                        <div className="float-right">
                                            <a href="javascript:" className="m-r-10">mark as read</a>
                                            <a href="javascript:">clear all</a>
                                        </div>
                                    </div>
                                    <ul className="noti-body">
                                        <li className="n-title">
                                            <p className="m-b-0">NEW</p>
                                        </li>
                                        <li className="notification">
                                            <div className="media">
                                                <img
                                                    className="img-radius"
                                                    src="assets/images/user/avatar-1.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                                <div className="media-body">
                                                    <p>
                                                        <strong>Contract XYZ</strong
                                                        ><span className="n-time text-muted"
                                                    ><i className="icon feather icon-clock m-r-10"></i>30
                            min</span
                                                    >
                                                    </p>
                                                    <p>Contract Termination approaching</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="n-title">
                                            <p className="m-b-0">EARLIER</p>
                                        </li>
                                        <li className="notification">
                                            <div className="media">
                                                <img
                                                    className="img-radius"
                                                    src="assets/images/user/avatar-2.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                                <div className="media-body">
                                                    <p>
                                                        <strong>Johannes Gronbach</strong
                                                        ><span className="n-time text-muted"
                                                    ><i className="icon feather icon-clock m-r-10"></i>40
                            min</span
                                                    >
                                                    </p>
                                                    <p>Closed Case #344</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="noti-footer">
                                        <a href="javascript:">show all</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown drp-user">
                                <a
                                    href="javascript:"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    <i className="icon feather icon-settings"></i>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right profile-notification"
                                >
                                    <div className="pro-head">
                                        <img
                                            src="assets/images/user/avatar-1.jpg"
                                            className="img-radius"
                                            alt="User-Profile-Image"
                                        />
                                        <span>John Doe</span>
                                        <a href="auth-signin.html" className="dud-logout" title="Logout">
                                            <i className="feather icon-log-out"></i>
                                        </a>
                                    </div>
                                    <ul className="pro-body">
                                        <li>
                                            <a href="javascript:" className="dropdown-item"
                                            ><i className="feather icon-settings"></i> Settings</a
                                            >
                                        </li>
                                        <li>
                                            <a href="javascript:" className="dropdown-item"
                                            ><i className="feather icon-user"></i> Profile</a
                                            >
                                        </li>
                                        <li>
                                            <a href="message.html" className="dropdown-item"
                                            ><i className="feather icon-mail"></i> My Messages</a
                                            >
                                        </li>
                                        <li>
                                            <a href="auth-signin.html" className="dropdown-item"
                                            ><i className="feather icon-lock"></i> Lock Screen</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
