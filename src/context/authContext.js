import React from 'react'
import { createContext } from 'react'

export const authContext = createContext({
    userinfo: "",
    setUserinfo: (userinfo) => {},
})
 