import React, { useState } from "react";
import { Button, Col, Input, Row, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateClient } from "Redux/Reducer/ClientSlice";

const Editform = (props: any) => {
  const clients = useSelector((state: any) => state.client.clients);
  const { editClient } = props;
  const dispatch = useDispatch();
  const [clientName, setClientsName] = useState(props.editClient.clientName);
  const [number, setNumber] = useState(props.editClient.number);
  const [address, setAddress] = useState(props.editClient.address);
  const [shopName, setShopName] = useState(props.editClient.shopName);

  const clientFormhandler = () => {
    const data = {
      id: clients.length + 1,
      clientName: clientName,
      number: number,
      address: address,
      shopName: shopName,
    };
  };

  const handleOk = () => {
    props.setIsEdit(false);
    const data = {
      id: editClient.id,
      clientName: clientName,
      number: number,
      address: address,
      shopName: shopName,
    };
    dispatch(updateClient(data));
  };

  const handleCancel = () => {
    props.setIsEdit(false);
  };
  return (
    <>
      <Modal
        title="Edit Clients"
        open={props.isEdit}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
      </Modal>
    </>
  );
};

export default Editform;
