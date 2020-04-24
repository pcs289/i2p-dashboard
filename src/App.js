import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import KPICard from "./components/KPICard";

const KPIList = [
  { title: "Ongoing Matters", value: 18 },
  { title: "Matters closed this month", value: 5 },
  { title: "Avg. Matters per Lawyer", value: 5 },
  { title: "Expenses this month", value: "€ 8.244,34" },
  { title: "Cases with external help", value: 12 },
  { title: "Average time to close case", value: "17 days" },
  { title: "Average spend on case", value: "€ 2.600" },
  { title: "Total Matters resolved", value: 577 },
];

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

                    <div className="col-xl-9 col-md-6">
                      <div className="card Recent-Users">
                        <div className="card-header">
                          <h5>Case Updates</h5>
                          <span className="float-right">
                            <a href="#">View All</a>
                          </span>
                        </div>
                        <div className="card-block px-0 py-0">
                          <div className="table-responsive">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th scope="col">Matter</th>
                                  <th scope="col">Last Update</th>
                                  <th scope="col">Updated By</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="unread">
                                  <td>
                                    <h6 className="mb-1">ABC Corp</h6>
                                    <p className="m-0">
                                      Lawsuit about something
                                    </p>
                                  </td>
                                  <td>
                                    <h6 className="text-muted">
                                      Confirmed Trial Date
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="text-muted">
                                      Ida Jorgensen
                                    </h6>
                                  </td>
                                  <td>
                                    <a
                                      href="#!"
                                      className="label theme-bg text-white f-12"
                                    >
                                      View Details
                                    </a>
                                  </td>
                                </tr>
                                <tr className="unread">
                                  <td>
                                    <h6 className="mb-1">Company XYZ</h6>
                                    <p className="m-0">
                                      Contract Negotiation about something
                                    </p>
                                  </td>
                                  <td>
                                    <h6 className="text-muted">
                                      Contract Draft Finished
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="text-muted">
                                      Albert Andersen
                                    </h6>
                                  </td>
                                  <td>
                                    <a
                                      href="#!"
                                      className="label theme-bg text-white f-12"
                                    >
                                      View Details
                                    </a>
                                  </td>
                                </tr>
                                <tr className="unread">
                                  <td>
                                    <h6 className="mb-1">Internal Matter</h6>
                                    <p className="m-0">
                                      Parking fees negotiation
                                    </p>
                                  </td>
                                  <td>
                                    <h6 className="text-muted">
                                      Sent initial proposal
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="text-muted">Silje Larsen</h6>
                                  </td>
                                  <td>
                                    <a
                                      href="#!"
                                      className="label theme-bg text-white f-12"
                                    >
                                      View Details
                                    </a>
                                  </td>
                                </tr>
                                <tr className="unread">
                                  <td>
                                    <h6 className="mb-1">123 Inc.</h6>
                                    <p className="m-0">
                                      Another very important lawsuit
                                    </p>
                                  </td>
                                  <td>
                                    <h6 className="text-muted">Research</h6>
                                  </td>
                                  <td>
                                    <h6 className="text-muted">
                                      Albert Andersen
                                    </h6>
                                  </td>
                                  <td>
                                    <a
                                      href="#!"
                                      className="label theme-bg text-white f-12"
                                    >
                                      View Details
                                    </a>
                                  </td>
                                </tr>
                                <tr className="unread">
                                  <td>
                                    <h6 className="mb-1">TV Station 5</h6>
                                    <p className="m-0">
                                      Agreement on some publishing rights
                                    </p>
                                  </td>
                                  <td>
                                    <h6 className="text-muted">
                                      Waiting for signed contract
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="text-muted">
                                      Johannes Gronbach
                                    </h6>
                                  </td>
                                  <td>
                                    <a
                                      href="#!"
                                      className="label theme-bg text-white f-12"
                                    >
                                      View Details
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-md-3 m-b-30">
                      <div className="card">
                        <div className="card-header">
                          <h5>Employee Status</h5>
                          <span className="float-right">
                            <a href="#">View All</a>
                          </span>
                        </div>
                        <div className="card-block px-0 py-0">
                          <div className="table-responsive">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>User</th>
                                  <th># Open Cases</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle m-r-10"
                                        style={{ width: "40px" }}
                                        src="assets/images/user/avatar-1.jpg"
                                        alt="activity-user"
                                      />
                                      Ida Jorgensen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">3</h6>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle m-r-10"
                                        style={{ width: "40px" }}
                                        src="assets/images/user/avatar-2.jpg"
                                        alt="activity-user"
                                      />
                                      Albert Andersen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">2</h6>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle m-r-10"
                                        style={{ width: "40px" }}
                                        src="assets/images/user/avatar-3.jpg"
                                        alt="activity-user"
                                      />
                                      Silje Larsen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">1</h6>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle m-r-10"
                                        style={{ width: "40px" }}
                                        src="assets/images/user/avatar-2.jpg"
                                        alt="activity-user"
                                      />
                                      Johannes Gronbach
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">2</h6>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle m-r-10"
                                        style={{ width: "40px" }}
                                        src="assets/images/user/avatar-1.jpg"
                                        alt="activity-user"
                                      />
                                      Cristine Leyer
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">3</h6>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

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
