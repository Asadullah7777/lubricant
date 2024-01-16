import React, { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { FaProductHunt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const [collpased, setCollpased] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <Layout style={{ height: "100%" }}>
        <Sider collapsed={collpased} theme="light">
          {collpased && (
            <BsArrowRightCircle
              onClick={() => setCollpased(!collpased)}
              size={28}
              style={{ marginLeft: "50px", marginTop: "10px" }}
            />
          )}
          {!collpased && (
            <BsArrowLeftCircle
              onClick={() => setCollpased(!collpased)}
              size={28}
              style={{ marginLeft: "170px", marginTop: "10px" }}
            />
          )}

          <Menu
            onClick={({ item, key }) => navigate(key)}
            mode="inline"
            items={[
              {
                label: "Dashboard",
                key: "/dashboard",
                icon: <MdDashboard />,
              },
              {
                label: "Products",
                key: "/products",
                icon: <FaProductHunt />,
              },
              {
                label: "Clients",
                key: "/clients",
                icon: <BsPersonFill />,
              },
            ]}
          ></Menu>
        </Sider>
      </Layout>
    </div>
  );
};

export default Sidebar;
