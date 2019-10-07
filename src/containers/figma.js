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

import rc from '../images/rc-final.gif';




class Figma extends Component {
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

    <div className = 'wrapper'> 
    <MyNavbar> </MyNavbar>
     <Header
     title = "Figma Plugins"
     color = "#5551FF"
     ></Header>

     <Hero
     textOne = "Working as RandomCoffee's first product designer #1 in Paris, France."
     textTwo = "Built IOS and web prototypes to help people in business authentically connect."
     image = "./images/test prod@2x.png"
     color = "black"
     ></Hero>

     <SmallImage
      image = "./images/test prod@2x.png"
      caption = "Discover people who match the skills you’re searching for."
     ></SmallImage>

   

     

    <Footer/>

    </div>
  );
}
}
export default Figma;
