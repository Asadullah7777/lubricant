import React, { useState } from "react";
import "./FormProduct.css";
import { Button, Col, Input, Row, Select } from "antd";
import { Option } from "antd/es/mentions";
import { create } from "Redux/Reducer/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const FormProduct = () => {
  const products = useSelector((state: any) => state.product.products);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [company, setCompany] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountprice, setDiscountPrice] = useState("");
  const [cartonprice, setCartonPrice] = useState("");
  const [unitprice, setUnitPrice] = useState("");

  const dispatch = useDispatch();

  const productformhandle = (e: any) => {
    e.preventDefault();
    const data = {
      id: products.length + 1,
      title: title,
      category: category,
      quantity: quantity,
      company: company,
      discount: discount,
      discountprice: discountprice,
      cartonprice: cartonprice,
      unitprice: unitprice,
    };
    dispatch(create(data));
  };

  return (
    <div className="form-p">
      <Row style={{ justifyContent: "space-evenly", height: 80 }}>
        <Col span={10}>
          <label>Product</label>
          <Input
            placeholder="Product"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></Input>
        </Col>
        <Col span={10}>
          <label>Category:</label>
          <Select
            value={category}
            onChange={(option) => {
              setCategory(option);
            }}
            style={{ width: 600 }}
            defaultValue="GREESE"
            options={[
              { value: "greese", label: "GREESE" },
              { value: "lubricants", label: "LUBRICANTS" },
              { value: "atf", label: "ATF" },
              { value: "gearoil", label: "GEAROIL" },
            ]}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: "space-evenly", height: 80 }}>
        <Col span={10}>
          <label>Quantity</label>
          <Input
            placeholder=""
            required
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></Input>
        </Col>
        <Col span={10}>
          <label>Company:</label>
          <Input
            placeholder=""
            required
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          ></Input>
        </Col>
      </Row>
      <Row style={{ justifyContent: "space-evenly", height: 80 }}>
        <Col span={10}>
          <label>Discount:</label>
          <Select
            value={discount}
            onChange={(option) => {
              setDiscount(option);
            }}
            style={{ width: 600 }}
            defaultValue="PERCENTAGE"
            options={[
              { value: "percentage", label: "PERCENTAGE" },
              { value: "fixed", label: "FIXED" },
            ]}
          />
        </Col>
        <Col span={10}>
          <label>Discount Price</label>
          <Input
            placeholder=""
            required
            value={discountprice}
            onChange={(e) => {
              setDiscountPrice(e.target.value);
            }}
          ></Input>
        </Col>
      </Row>
      <Row style={{ justifyContent: "space-evenly", height: 80 }}>
        <Col span={10}>
          <label>Carton Price</label>
          <Input
            placeholder=""
            required
            value={cartonprice}
            onChange={(e) => {
              setCartonPrice(e.target.value);
            }}
          ></Input>
        </Col>
        <Col span={10}>
          <label>Unit Price</label>
          <Input
            placeholder=""
            required
            value={unitprice}
            onChange={(e) => {
              setUnitPrice(e.target.value);
            }}
          ></Input>
        </Col>
      </Row>
      <Row className="btn-p">
        <Button
          className="btn1-p"
          type="primary"
          htmlType="submit"
          onClick={productformhandle}
        >
          Save Product
        </Button>
      </Row>
    </div>
  );
};

export default FormProduct;
