import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';
import Case from '../containers/casestudy';
import About from '../containers/about';
import MyNavbar from "../components/nav";
import Footer from "../footer";




class App extends Component {
  //adding constructor from tut
  constructor(props){
    super(props);
    //now assign state, and a default value, doesnt matter if i say data
    this.state = {
      //contacts: []
    };
  }
 

  render() {
  return (

    <div className = 'home-wrapper'> 
    <MyNavbar/>
    <Link to = "/case"> Link to a case</Link>
    <Footer/>

    </div>
  );
}
}
export default App;
