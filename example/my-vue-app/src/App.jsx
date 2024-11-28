import React, { useContext } from 'react'
import Cart from './Cart'
import { ThemeContext } from './Cart'



const App = () => {
 const {Theme,ToggleTheme,IsAuth,Login,Logout}=  useContext(ThemeContext)

  return (
    <div style={{background:Theme === "dark"?  "black" : "white", color : Theme === "dark"? "white" : "black" }}>App
    {IsAuth === True?   <div onClick={Logout}>logout</div> : <div onClick={Login}>login</div> } 
    
   
    <button onClick={ToggleTheme}> Toggle Theme</button>
    <Cart/>
    </div>
  )
}
export default App

