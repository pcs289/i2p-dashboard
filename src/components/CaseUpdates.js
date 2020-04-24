import React from "react";

function caseUpdates({ matters }) {
  return (
    <div className="col-xl-9 col-md-6">
      <div className="card Recent-Users">
        <div className="card-header">
          <h5>Case Updates</h5>
          <span className="float-right">
            <a href="#">View All ({matters.length})</a>
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
                {matters.slice(0, 5).map((matter) => (
                  <tr className="unread">
                    <td>
                      <h6 className="mb-1">{matter.company}</h6>
                      <p className="m-0">{matter.matterType}</p>
                    </td>
                    <td>
                      <h6 className="text-muted">{matter.lastUpdate}</h6>
                    </td>
                    <td>
                      <h6 className="text-muted">{matter.lawyer}</h6>
                    </td>
                    <td>
                      <a href="#!" className="label theme-bg text-white f-12">
                        View Details
                      </a>
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

export default caseUpdates;
