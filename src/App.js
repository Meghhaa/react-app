import React from "react";
import Todo from "./Component/TodoApp/Todo";
import About from "./Component/About/About"; 
import Header from "./Component/Header/Header";  
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";

export default () => {
  
    return (
        

       <Router>
        <Header />
        <Routes>
        <Route path="/" exact Component={Todo} />
        <Route path="/about" Component={About} />
        </Routes>
       </Router>

    
    );
      
};








