import React,{Component} from 'react';
import './App.css';
import Web from "./component/web";
//import {BrowserRouter as Router,Route,Switch} from "react-router-dom";





class App extends Component{
  render(){ 
    return (

      <div>
        <Web title="Live Chat"/>
      </div>
    );
  }
}
export default App;
