import { useState } from "react";
import GlobalContext from "./context";

import React from 'react'

function ContextProvider({ children }) {

  // GLOBAL STATES
  const [ userData, setUserData ] = useState({
    username: "",
    isAuth: false,
    role_name: ""
  })

  // FUNCTIONS
  const login = (userData) => {
    setUserData({
        username: userData.username,
        isAuth: true,
        role_name: userData.role_name
    })
  }

  const logout = () => {
    setUserData({
        username: "",
        isAuth: false,
        role_name: ""
    })
  }

  return (
    <GlobalContext.Provider value={{ userData, login, logout }}>
        { children }
    </GlobalContext.Provider>
  )
}

export default ContextProvider