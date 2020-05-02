import React from "react";

export default function InternalSatisfaction() {
  return (
    <div className="col-xl-6 col-md-6">
      <div className="card user-list">
        <div className="card-header">
          <h5>Internal Customer Satisfaction</h5>
        </div>
        <div className="card-block">
          <div className="row align-items-center justify-content-center m-b-20">
            <div className="col-6">
              <h2 className="f-w-300 d-flex align-items-center float-left m-0">
                3.75
                <i className="fas fa-star f-10 m-l-10 text-c-yellow"></i>
              </h2>
            </div>
            <div className="col-6">
              <h6 className="d-flex align-items-center float-right m-0">
                + 0.4 %
                <i className="fas fa-caret-up text-c-green f-22 m-l-10"></i>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h6 className="align-items-center float-left">
                <i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>5
              </h6>
              <h6 className="align-items-center float-right">Operations</h6>
              <div className="progress m-t-30 m-b-20" style={{ height: "6px" }}>
                <div
                  className="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-xl-12">
              <h6 className="align-items-center float-left">
                <i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>4
              </h6>
              <h6 className="align-items-center float-right">Marketing</h6>
              <div className="progress m-t-30 m-b-20" style={{ height: "6px" }}>
                <div
                  className="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-xl-12">
              <h6 className="align-items-center float-left">
                <i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>4
              </h6>
              <h6 className="align-items-center float-right">R & D</h6>
              <div className="progress m-t-30 m-b-20" style={{ height: "6px" }}>
                <div
                  className="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-xl-12">
              <h6 className="align-items-center float-left">
                <i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>2
              </h6>
              <h6 className="align-items-center float-right">Logistics</h6>
              <div className="progress m-t-30 m-b-20" style={{ height: "6px" }}>
                <div
                  className="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
