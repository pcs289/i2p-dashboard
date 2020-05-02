import React from "react";

export default function DashboardWrapper(props) {
  return (
    <div className="pcoded-main-container">
      <div className="pcoded-wrapper">
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                <h2 className="mb-5">
                  Department Overview
                  <span className="float-right text-muted">April 2020</span>
                </h2>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
