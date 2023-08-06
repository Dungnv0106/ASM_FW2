import React, { useEffect } from 'react'
import Silebar from './Silebar'
import Dashboard from '../../pages/admin/Dashboard'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';


type Props = {}

const LayOutAdmin = (props: Props) => {
    const userString = localStorage.getItem('user');
    if (userString !== null) {
      const user = JSON.parse(userString);
      console.log(user)
      
      if (user.user.role === 'admin') {
        return (
          <div className='container'>
            <Silebar />
            <Outlet />
          </div>
        );
      } else {
        console.log("Bạn không có quyền truy cập vào đây");
        return <Navigate to="/" replace />;
      }
    } else {
      console.log('Bạn chưa đăng nhập kìa =)');
      return <Navigate to="/" replace />;
    }
  };

export default LayOutAdmin