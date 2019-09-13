import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';
import Case from '../containers/casestudy';
import About from '../containers/about';
import MyNavbar from "../components/nav";
import Footer from "../footer";
import Feature from "../feature";
import FeatureRev from "../feature-rev";


import styled, { css } from 'styled-components'


const HeroContainer = styled.div`
text-align: center;
padding: 12%;
`;

const HeroTitle = styled.div`
font-family: Overpass;
font-size: 80px;
font-weight: 900;
color: #f03f6d;

@media (max-width: 550px) {
  font-size: 60px;
}

`;

const HeroSub= styled.div`
font-family: Oxygen;
font-size: 24px;

@media (max-width: 550px) {
  font-size: 18px;
}

`;
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
    <HeroContainer> 
    <HeroTitle>Hi!  I’m Sam.</HeroTitle>
    <HeroSub> I’m a designer, entrepreneur, and undergrad at Stanford.</HeroSub>
    </HeroContainer>

    <Feature
    image = "./images/RCfeature@2x.png"
    tag = "PRODUCT DESIGN"
    title = "RandomCoffee"
    text = "Working in a French startup as employee #10, and product designer #1."
    shade = "0, 206, 161, 0.5"
    color = "#00cea1"
    ></Feature>

    <FeatureRev
    image = "./images/microfeature@2x.png"
    tag = "ENGINEERING"
    title = "Peerlift"
    text = "Shipping a React app for 60,000+ users from scratch."
    shade = "46, 141, 241, 0.5"
    color = "#2e8df1"
    ></FeatureRev>


    <Link to = "/case"> Link to a case</Link>
    <Footer/>

    

    </div>
  );
}
}
export default App;
