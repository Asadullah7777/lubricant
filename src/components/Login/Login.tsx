import { Row, Image, Button, Checkbox, Form, Input } from "antd";
import { Col } from "antd/es/grid";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./Login.css";
import Typography from "antd/es/typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { login } from "Redux/Reducer/UserSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    navigate("/dashboard");

    dispatch(
      login({
        name: name,
        password: password,
      })
    );
  };

  return (
    <div className="login">
      <Row
        justify="center"
        style={{ paddingTop: "150px", paddingBottom: "150px", margin: "0px" }}
        gutter={10}
      >
        <Col span={8}></Col>
        <Col span={8}>
          <div className="lubricant-logo">
            <Typography.Title style={{ textAlign: "center", color: "#212529" }}>
              Login
            </Typography.Title>
          </div>
          <Form
            layout="vertical"
            name="normal_login"
            className="login-form"
            // initialValues={{ remember: true }}
            // onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                placeholder="User Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item className="forget-password">
              <Form.Item
                className="remmber-me"
                name="remember"
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={handleLogin}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};

export default Login;
