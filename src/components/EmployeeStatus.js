import React from "react";

export default function EmployeeStatus({ employeeStatus }) {
  return (
    <div className="col-xl-3 col-md-3 m-b-30">
      <div className="card">
        <div className="card-header">
          <h5>Employee Status</h5>
          <span className="float-right">
            <a href="#">View All ({employeeStatus.length})</a>
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
                {employeeStatus.slice(0, 5).map((employee, i) => (
                  <tr key={i}>
                    <td>
                      <h6 className="m-0">
                        <img
                          className="rounded-circle m-r-10"
                          style={{ width: "40px" }}
                          src={`assets/images/user/avatar-${
                            Math.floor(Math.random() * 5) + 1
                          }.jpg`}
                          alt="activity-user"
                        />
                        {employee.name}
                      </h6>
                    </td>
                    <td>
                      <h6 className="m-0">{employee.matters}</h6>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
