import React, { Component } from 'react';
import {withDashboard} from "../contexts/DashboardContext";

class Settings extends Component {
    render() {
        const { list, setInactive, setActive } = this.props;
        return (
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
        );
    }
}

export default withDashboard(Settings);
