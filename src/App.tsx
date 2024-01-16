import useSelection from "antd/es/table/hooks/useSelection";
import Clients from "components/Clients/Clients";
import Header1 from "components/Header/Header1";
import HomeDashboard from "components/HomeDashboard/HomeDashboard";
import Login from "components/Login/Login";
import Product from "components/Products/Product";
import Sidebar from "components/SideBar/Sidebar";
import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Routes, Route } from "react-router-dom";
import { selectUser } from "Redux/Reducer/UserSlice";

import "./App.css";

function App() {
  const { isLogin, user } = useSelector((state: any) => state.auth);
  console.log("userLogined :", user);
  return (
    <div className="App">
      <Header1 />
      <div className="context">
        {isLogin && <Sidebar />}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Product />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/dashboard" element={<HomeDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
