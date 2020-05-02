import React from "react";

function PieChart({ title, id }) {
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-header">
          <h5>{title}</h5>
        </div>
        <div className="card-block">
          <div id={id} style={{ height: "300px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
