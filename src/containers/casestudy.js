import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../components/header";
import Divider from "../components/divider";
import Hero from "../hero";




import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import seven from '../images/7.png';
import eight from '../images/8.png';
import nine from '../images/9.png';
import ten from '../images/10.png';



class Case extends Component {
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
     <Header
     title = "Microscholarships"
     color = "#ffd692"
     ></Header>

     <Hero
     textOne = "Built a tech non-profit with 45,000 users."
     textTwo = "Pivoted to a platform to connect college students in need"
     image = "./images/d-pl-3@2x.png"
     color = "#85c7ff"
     ></Hero>

     <Divider
     title = "Prototyping solutions"
     color = "#ffd692"
     ></Divider>

   

    </div>
  );
}
}
export default Case;
