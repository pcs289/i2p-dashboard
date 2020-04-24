import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import KPICard from "./components/KPICard";
import CaseUpdates from "./components/CaseUpdates";
import { makeMatters } from "./makeFakeData";
import EmployeeStatus from "./components/EmployeeStatus";

const { matters, KPIList, employeeStatus } = makeMatters(500);
const ongoingMatters = matters.filter((matter) => matter.active === true);

function App() {
  return (
    <>
      <Navbar />
      <Header />
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
                  <h3 className="mb-3 text-muted">KPI Overview</h3>
                  <div className="row">
                    {/* KPI List */}
                    {KPIList.map((KPI, i) => (
                      <KPICard key={i} title={KPI.title} value={KPI.value} />
                    ))}
                    {/* KPI List End */}
                    <div className="col-lg-12">
                      <h3 className="my-4 text-muted">Matter Details</h3>
                    </div>

                    <CaseUpdates matters={ongoingMatters} />

                    <EmployeeStatus employeeStatus={employeeStatus} />

                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-header">
                          <h5>
                            Internal vs. External Cost
                            <span className="text-muted"> ( € )</span>
                          </h5>
                        </div>
                        <div className="card-block">
                          <div
                            id="morris-bar-chart"
                            style={{ height: "300px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-header">
                          <h5>Active Matters by Category</h5>
                        </div>
                        <div className="card-block">
                          <div
                            id="morris-donut-chart"
                            style={{ height: "300px" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-4">
                      <h3 className="mb-3 text-muted">Client Details</h3>
                    </div>
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
                                <i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>
                                5
                              </h6>
                              <h6 className="align-items-center float-right">
                                Operations
                              </h6>
                              <div
                                className="progress m-t-30 m-b-20"
                                style={{ height: "6px" }}
                              >
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
                                <i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>
                                4
                              </h6>
                              <h6 className="align-items-center float-right">
                                Marketing
                              </h6>
                              <div
                                className="progress m-t-30 m-b-20"
                                style={{ height: "6px" }}
                              >
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
                                <i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>
                                4
                              </h6>
                              <h6 className="align-items-center float-right">
                                R & D
                              </h6>
                              <div
                                className="progress m-t-30 m-b-20"
                                style={{ height: "6px" }}
                              >
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
                                <i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>
                                2
                              </h6>
                              <h6 className="align-items-center float-right">
                                Logistics
                              </h6>
                              <div
                                className="progress m-t-30 m-b-20"
                                style={{ height: "6px" }}
                              >
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

                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-header">
                          <h5>Active Matters per department</h5>
                        </div>
                        <div className="card-block">
                          <div
                            id="morris-bar-stacked-chart"
                            style={{ height: "300px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
