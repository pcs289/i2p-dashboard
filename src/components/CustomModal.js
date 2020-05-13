import React from "react";
import { Modal } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function CustomModal({ showModal, handleClose, title, value }) {
  let val;
  const makeFakeValues = (value, last = null) => {
    // Expenses, average spend and time to close come as strings
    if (typeof value === "string") {
      if (value.includes("€")) {
        val = parseFloat(value.slice(2).replace(".", ""));
      } else if (value.includes("days")) {
        val = parseFloat(value.replace(" days", ""));
      }
      // All other KPIs come as numbers
    } else {
      val = value;
    }

    const change = Math.random();
    // this is for the current month where we need to display the current value
    if (last) {
      return val;
      // for the others we make a random deviation
    } else if (Math.random() > 0.5) {
      return Math.round(val * (1 + change));
    } else {
      return Math.round(val * change);
    }
  };

  const data = [
    {
      name: "Oct",
      [title]: makeFakeValues(value),
      amt: 2400,
    },
    {
      name: "Nov",
      [title]: makeFakeValues(value),
      amt: 2210,
    },
    {
      name: "Dec",
      [title]: makeFakeValues(value),
      amt: 2290,
    },
    {
      name: "Jan",
      [title]: makeFakeValues(value),
      amt: 2000,
    },
    {
      name: "Feb",
      [title]: makeFakeValues(value),
      amt: 2181,
    },
    {
      name: "Mar",
      [title]: makeFakeValues(value),
      amt: 2500,
    },
    {
      name: "Apr",
      [title]: makeFakeValues(value, true),
      amt: 2100,
    },
  ];

  return (
    <Modal show={showModal} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BarChart
          width={400}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey={title} fill="#8884d8" />
        </BarChart>
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
