import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../components/header";
import Divider from "../components/divider";
import DividerEnd from "../components/dividerend";

import Hero from "../hero";
import FullImage from "../full-img";
import SmallImage from "../small-img";
import SplitImage from "../split-img";

import Paragraph from "../components/paragraph";
import Title from "../components/title";
import Quote from "../components/quote";
import Footer from "../footer";
import MyNavbar from "../components/nav";

class Connect extends Component {
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

    <Header
    title = "Peerlift Connect"
    color = "#FF6D96"
    ></Header>

     <Hero
     textOne = "Sample text one"
     textTwo = "Pivoted to a platform to connect college students in need"
     image = "./images/d-pl-3@2x.png"
     color = "#FF6D96"
     ></Hero>
      
    <FullImage
    image = "./images/moodboard@2x.png"
    ></FullImage>
      <Footer/>
      </div>
    );
  }
  }
  export default Connect;
  