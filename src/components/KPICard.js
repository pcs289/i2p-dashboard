import React, { useState, useEffect } from "react";

function KPICard({ title, value }) {
  const [change, setChange] = useState("");

  useEffect(() => {
    const makeRandomNumber = () => {
      let num =
        Math.random() < 0.5
          ? Math.floor(Math.random() * 10)
          : Math.floor(Math.random() * -10);

      if (num < 0) {
        setChange(String(num));
      } else {
        setChange("+ " + String(num));
      }
    };
    makeRandomNumber();
  }, []);

  return (
    <div className="col-md-6 col-xl-3">
      <div className="card daily-sales">
        <div className="card-block">
          <h6 className="mb-4">{title}</h6>
          <div className="row d-flex align-items-center">
            <div className="col-9">
              <h3 className="f-w-300 d-flex align-items-center m-b-0">
                <i
                  className={`feather ${
                    change < 0 ? "icon-arrow-down" : "icon-arrow-up"
                  } text-c-${change < 0 ? "red" : "green"} f-30 m-r-10`}
                ></i>
                {value}
              </h3>
            </div>

            <div className="col-10 text-left pt-2">
              <p className="m-b-0">{change}% compared to average</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KPICard;
