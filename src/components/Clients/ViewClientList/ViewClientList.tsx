import { Table, Space } from "antd";
import React, { useEffect, useState } from "react";
import "./ViewClientList.css";
import { useDispatch, useSelector } from "react-redux";
import Editform from "./Editform";
import { deleteClients } from "Redux/Reducer/ClientSlice";

const ViewClientList = () => {
  const clients = useSelector((state: any) => state.client.clients);
  const [isEdit, setIsEdit] = useState(false);
  const [editClient, setEditClient] = useState();
  const dispatch = useDispatch();

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
    },
    {
      title: "Shop Name",
      dataIndex: "shopName",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Number",
      dataIndex: "number",
    },
    {
      title: "Actions",
      dataIndex: "operation",
      key: "operation",
      render: (_unknow: any, record: any) => {
        return (
          <Space size="middle">
            <a
              onClick={() => {
                clientEditHandle(record);
              }}
            >
              Edit{" "}
            </a>

            <a
              onClick={() => {
                dispatch(deleteClients(record.id));
              }}
            >
              Delete
            </a>
          </Space>
        );
      },
    },
  ];
  const clientEditHandle = (data: any) => {
    setEditClient(data);
    setIsEdit(true);
  };

  useEffect(() => {}, [clients]);
  return (
    <>
      <div>
        <Table columns={columns} dataSource={clients} />
      </div>
      {isEdit && (
        <Editform
          isEdit={isEdit}
          editClient={editClient}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
};

export default ViewClientList;
