
// dependencies
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// Nested Components
function BookList(){
    // always return JSX
    return ( // always use parenthesis for multiple lines
        <div className="App"> 
            <App />
        </div>  
    ); 
} 

// rendor dom "what", and "where"
ReactDom.render(
    <BookList/>, document.getElementById("root")
); 
