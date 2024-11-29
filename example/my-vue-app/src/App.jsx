import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const App = () => {
  const { IsAuth, Login, Logout, theme, Toggle } = useContext(ThemeContext);

  return (
    <>
            <div
             style={{
               background: theme === "dark" ? "black" : "white",
               color: theme === "dark" ? "white" : "black" 
             }}
           >
      
        <div>
          User Authenticated : {IsAuth === true ?
           "yes" : " no"}
         {!IsAuth &&  <button onClick={Login}>Login</button>}
         {IsAuth &&  <button onClick={Logout}>Logout</button>}
        </div>
    
        <button onClick={Toggle}>Theme</button>
      </div>
    </>
  );
};

export default App;
