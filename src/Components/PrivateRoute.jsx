import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute({ isAuth, children }) {
    if(!isAuth) {
        return <Navigate to={"/"} />
    }
    return children ? children : <Outlet/>
}

export default PrivateRoute