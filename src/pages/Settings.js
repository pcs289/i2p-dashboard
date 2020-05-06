import React, { Component } from 'react';
import {withDashboard} from "../contexts/DashboardContext";
const $ = window.$;

class Settings extends Component {

    toggleMobileNavbar() {
        console.log('Toggle');
        $('.pcoded-navbar').toggleClass('mob-open');
    }

    render() {
        const { list, setInactive, setActive } = this.props;
        return (
            <>
                <header className="navbar pcoded-header navbar-expand-lg navbar-light">
                    <div className="m-header">
                        <a className="mobile-menu" id="mobile-collapse1" onClick={() => this.toggleMobileNavbar()}><span></span></a>
                        <a href="" className="b-brand">
                            <div className="b-bg">
                                <i className="feather icon-settings"></i>
                            </div>
                            <span className="b-title">Administration Settings</span>
                        </a>
                    </div>
                    <a className="mobile-menu" id="mobile-header" href="javascript:">
                        <i className="feather icon-more-horizontal"></i>
                    </a>
                </header>
                <div className="pcoded-main-container">
                    <div className="pcoded-content">
                        <h1>Settings</h1>
                        <p>This page allows to enable / disable the KPI visibility in Legal Dashboard page.</p>
                        <ul style={{listStyle: 'none'}}>
                            {list.map((item, index) =>
                                <li key={index} onClick={item.active ? () => setInactive(item.title) : () => setActive(item.title)}>
                                    {item.title} <i className={item.active ? 'feather icon-eye' : 'feather icon-eye-off'}></i>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default withDashboard(Settings);
