import React from "react";
import {Modal} from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


function CustomModal({showModal, handleClose, title}) {

    const data = [
        {
            name: '06/05/20', [title]: 4000, amt: 2400,
        },
        {
            name: '07/05/20', [title]: 3000, amt: 2210,
        },
        {
            name: '08/05/20', [title]: 2000, amt: 2290,
        },
        {
            name: '09/05/20', [title]: 2780, amt: 2000,
        },
        {
            name: '10/05/20', [title]: 1890, amt: 2181,
        },
        {
            name: '11/05/20', [title]: 2390, amt: 2500,
        },
        {
            name: '12/05/20', [title]: 3490, amt: 2100,
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
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
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
