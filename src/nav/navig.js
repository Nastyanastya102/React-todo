import React from 'react';
import './navig.css';
import {
    Link,
  } from "react-router-dom";
export default function Navigo (){
    return (
        <div className="nav-bar">
         <Link to="/">Your succese</Link>  
         <Link to="/about">Your Goal</Link>  
        <Link to="/warn">Your failed</Link>
        </div>
    )
}
