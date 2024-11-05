import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    let loginStatus = localStorage.getItem('loginStatus') || false;
  return (
    <div>
        {
            loginStatus ? <Outlet/> : <Navigate to={`/login`}/>
        }
    </div>
  )
}

export default ProtectedRoute;