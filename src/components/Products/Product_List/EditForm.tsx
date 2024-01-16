import React, { useState } from "react";
import { Modal, Button, Col, Input, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { update } from "Redux/Reducer/ProductSlice";

const EditForm = (props: any) => {
  const products = useSelector((state: any) => state.product.products);
  const { editProduct } = props;
  const [title, setTitle] = useState(editProduct.title);
  const [category, setCategory] = useState(editProduct.category);
  const [quantity, setQuantity] = useState(editProduct.quantity);
  const [company, setCompany] = useState(editProduct.company);
  const [discount, setDiscount] = useState(editProduct.discount);
  const [discountprice, setDiscountPrice] = useState(editProduct.discountprice);
  const [cartonprice, setCartonPrice] = useState(editProduct.cartonprice);
  const [unitprice, setUnitPrice] = useState(editProduct.unitprice);
  const [open, setOpen] = useState(props.isEdit);

  const dispatch = useDispatch();

  const showModal = () => {
    props.setIsEdit(true);
    setOpen(false);
  };

  const handleOk = () => {
    props.setIsEdit(false);
    setOpen(false);
    const data = {
      id: editProduct.id,
      title: title,
      category: category,
      quantity: quantity,
      company: company,
      discount: discount,
      discountprice: discountprice,
      cartonprice: cartonprice,
      unitprice: unitprice,
    };
    dispatch(update(data));
  };

  const handleCancel = () => {
    props.setIsEdit(false);
    setOpen(false);
  };

  return (
    <Modal
      title="Edit Product"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
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
            style={{ width: 200 }}
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
            style={{ width: 200 }}
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
    </Modal>
  );
};

export default EditForm;
