import React, { useState, useEffect } from "react";
import "./HomeDashboard.css";
import { Card, Col, Row } from "antd";
import { Area } from "@ant-design/plots";
import CircleProgress from "./CirclePorgress";
import { useSelector } from "react-redux";

const HomeDashboard = () => {
  const product = useSelector((state: any) => state.product.products);
  const client = useSelector((state: any) => state.client.clients);
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "Date",
    yField: "scales",
    xAxis: {
      tickCount: 5,
    },
    animation: true,
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: {
        isArea: true,
      },
    },
  };

  //Circle Progress

  return (
    <div className="dashboard">
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Total Products" bordered={false}>
            <h4>Number of Products</h4>
            {product.length}
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Total Clients" bordered={false}>
            <h4>Number of Clients</h4>
            {client.length}
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Coming Soon" bordered={false}>
            Coming Soon
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Coming Soon" bordered={false}>
            Coming Soon
          </Card>
        </Col>
      </Row>
      <Row gutter={18} style={{ marginTop: "50px" }}>
        <Col span={16}>
          <Area {...config} />
        </Col>
        <Col span={8}>
          <CircleProgress />
        </Col>
      </Row>
    </div>
  );
};

export default HomeDashboard;
