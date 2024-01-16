import { Table, Space, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditForm from "./EditForm";
import "./ProductList.css";
import { deleted } from "Redux/Reducer/ProductSlice";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const ProductList = () => {
  const products = useSelector((state: any) => state.product.products);
  // products = products
  // const data = products?.sort((a: any, b: any) => a.id - b.id);
  // const [allProducts, setAllProducts] = useState(data ? data : []);
  const [isEdit, setIsEdit] = useState(false);
  const [editProduct, setEditProduct] = useState();

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      // key:'1',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: "Title",
      dataIndex: "title",
      // key:'2',
    },
    {
      title: "Category",
      dataIndex: "category",
      // key:'3',
    },
    {
      title: "Unit Price",
      dataIndex: "unitprice",
      // key:'4',
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      // key:'5',
    },
    {
      title: "Carton Price",
      dataIndex: "cartonprice",
      // key:'6',
    },
    {
      title: "Discount",
      dataIndex: "discount",
    },
    {
      title: "Discount Price",
      dataIndex: "discountprice",
      // key:'7',
    },
    {
      title: "Company",
      dataIndex: "company",
      // key:'8',
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
                handleEdit(record);
              }}
            >
              Edit{" "}
            </a>

            <a
              onClick={() => {
                console.log("iohf", record.id);
                dispatch(deleted(record.id));
              }}
            >
              Delete
            </a>
          </Space>
        );
      },
    },
  ];

  const handleEdit = (data: any) => {
    setEditProduct(data);
    setIsEdit(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {}, [products]);
  return (
    <>
      <div>
        <Table columns={columns} dataSource={products} />
      </div>
      {isEdit && (
        <EditForm
          isEdit={isEdit}
          editProduct={editProduct}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
};

export default ProductList;
