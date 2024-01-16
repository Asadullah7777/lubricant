import React, { useState } from "react";
import "./AddClient.css";
import { Button, Col, Input, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { saveClient } from "Redux/Reducer/ClientSlice";

const AddClient = () => {
  const clients = useSelector((state: any) => state.client.clients);
  const dispatch = useDispatch();
  const [clientName, setClientsName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [shopName, setShopName] = useState("");

  const clientFormhandler = () => {
    const data = {
      id: clients.length + 1,
      clientName: clientName,
      number: number,
      address: address,
      shopName: shopName,
    };
    dispatch(saveClient(data));
  };

  return (
    <div className="form-c">
      <Row style={{ justifyContent: "space-evenly", height: 80 }}>
        <Col span={10}>
          <label>Client Name</label>
          <Input
            placeholder=""
            required
            value={clientName}
            onChange={(event) => {
              setClientsName(event.target.value);
            }}
          ></Input>
        </Col>
        <Col span={10}>
          <label>Number</label>
          <Input
            placeholder=""
            required
            value={number}
            onChange={(event) => {
              setNumber(event.target.value);
            }}
          ></Input>
        </Col>
      </Row>
      <Row style={{ justifyContent: "space-evenly", height: 80 }}>
        <Col span={10}>
          <label>Address</label>
          <Input
            placeholder=""
            required
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          ></Input>
        </Col>
        <Col span={10}>
          <label>Shop Name:</label>
          <Input
            placeholder=""
            required
            value={shopName}
            onChange={(event) => {
              setShopName(event.target.value);
            }}
          ></Input>
        </Col>
      </Row>
      <Row className="btn-c">
        <Button
          className="btn1-c"
          type="primary"
          htmlType="submit"
          onClick={clientFormhandler}
        >
          Save Client
        </Button>
      </Row>
      {/* </Form> */}
      {/* </Row> */}
    </div>
  );
};

export default AddClient;
