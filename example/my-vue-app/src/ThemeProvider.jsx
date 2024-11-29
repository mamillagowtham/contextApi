import React, { createContext, useState } from 'react'

export   const ThemeContext = createContext()
const ThemeProvider = (props) => {
    const [theme,setTheme]=useState("dark")
    const [IsAuth,setIsAuth] = useState(false)
  
    const Login =()=>{
    setIsAuth(true)
  }

  const Logout = ()=>{
    setIsAuth(false)
  }

  const Toggle = ()=>{
     setTheme( theme === "dark" ?  "light" : "dark") 
  }
  return (
    <ThemeContext.Provider value={{IsAuth,Login,Logout,theme,Toggle}}>
    {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;