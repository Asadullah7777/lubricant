import React from 'react';
import './Header.css';
import { Image,Layout } from 'antd';
import logo from '../../../src/asserts/login_logo.jpg';
import  {Header}  from 'antd/es/layout/layout';
import Typography from 'antd/es/typography';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { logout } from 'Redux/Reducer/UserSlice';

const Header1 = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state.auth.isLogin);
   const logouthandle =()=>{
    navigate('/');
dispatch(logout());
   }
   const loginhandle =() =>{
    navigate('/')
   }
  
  return(
    <div className='container'>
        
        <Header>
          <div style={{display:'flex',alignItems:'center'}}>
           <Typography.Title style={{color:'white'}}>IDEVSOL</Typography.Title>
           </div>
           {
            isLogin ?  <div className='right-login' onClick={logouthandle}>logout</div>  :   <div className='right-login' onClick={loginhandle} >login</div>
           }
         
        
         
        </Header>
       
    </div>
    );
}

export  default Header1;

