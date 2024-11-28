import React, { createContext, useState } from 'react'

export const  ThemeContext= createContext()

const Cart = (props) => {

    const [Theme,setTheme] = useState("dark")
    const [IsAuth,setIsAuth] = useState(false)

    const ToggleTheme = ()=>
    {
       setTheme(Theme === "dark" ? "light" : "dark")
    }


    const Login = ()=>{
     setIsAuth(true)
    }

    const Logout = ()=>{
        setIsAuth(false)
    }

    return (
  
        <ThemeContext.Provider value={{Theme ,ToggleTheme,IsAuth,Login,Logout}}>hello
        {props.children}
        </ThemeContext.Provider>
   
  )
}

export default Cart