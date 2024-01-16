import React from 'react';
import './Product.css';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd'
import FormProduct from './Form_Products/FormProduct';
import ProductList from './Product_List/ProductList';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '/add_product',
    label: `ADD PRODUCT`,
    children: <FormProduct/>,
  },
  {
    key: '/product_list',
    label: `PRODUCT LIST`,
    children: <ProductList/>,
  },

];

const Product = () => {
  return (
    <div className='product'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default Product