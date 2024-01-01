"use client"
import React, { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeContextProvider =({children}) => {
    const [themeMode, setThemeMode] = useState('dark')
    
    const lightTheme = () => {
        setThemeMode("light")
    }
    const darkTheme = () => {
        setThemeMode("dark")
    }
    // actual change in theme mode
    useEffect(() => {
        const themeMode = JSON.parse(localStorage.getItem("themeMode"))
        if (themeMode == 'dark'){
            setThemeMode(themeMode)
        }
      }, [])
    useEffect(()=>{
        document.querySelector('html').classList.remove("light","dark")
        document.querySelector('html').classList.add(themeMode)
        localStorage.setItem("themeMode", JSON.stringify(themeMode))
    }, [themeMode])

  return (
    <ThemeContext.Provider  value={{themeMode, setThemeMode, darkTheme, lightTheme}}>
        {children}
    </ThemeContext.Provider>
  ) 
}

export default ThemeContextProvider