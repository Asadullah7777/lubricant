import React from 'react';
import './Clients.css';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd'
import AddClient from './AddClient/AddClient';
import ViewClientList from './ViewClientList/ViewClientList';


const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '/add_clients',
    label: `ADD CLIENTS`,
    children: <AddClient/>,
  },
  {
    key: '/view-client-list',
    label: `VIEW CLIENT LIST`,
    children: <ViewClientList/>,
  },

];

const Clients = () => {
  return (
    <div className='client'>
         <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default Clients