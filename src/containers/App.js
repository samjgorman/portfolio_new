import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';
import Case from '../containers/casestudy';
import About from '../containers/about';
import MyNavbar from "../components/nav";
import Footer from "../footer";
import Feature from "../feature";
import FeatureRev from "../feature-rev";
import FeatureBk from "../feature-bk";



import styled, { css } from 'styled-components'


const HeroContainer = styled.div`
padding: 12%;
padding-left: 20%;
padding-right: 20%;

@media (max-width: 550px) {
  padding-left: 2em;
  padding-right: 2em;
}

@media (max-width: 1000px) {
  padding-left: 10%;
padding-right: 10%;
}


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
line-height:2em;


@media (max-width: 550px) {
  font-size: 18px;
  line-height:2em;
}`;

const Background= styled.div`
background-color: #FCDDBC;
margin-left: 10%;
margin-right: 10%;

}`;

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
    <HeroSub> I’m a designer, entrepreneur, and undergrad at Stanford, building for community.</HeroSub>
    </HeroContainer>

    <Feature
    

     image = "./images/figma@2x.png"
    tag = "UI DESIGN"
    title = "Figma Plugins"
    text = "A redesign of the popular design software for Kleiner Perkins Fellows."
    shade = "85,81,255, 0.5"
    color = "#5551FF"
    link = "/figma-kp"
 
    ></Feature>

    <FeatureBk
    image = "./images/pink@2x.png"
    tag = "FULL STACK"
    title = "Peerlift"
    text = "A human way to discover scholarships and summer programs."
    shade = "255, 109, 150, 0.5"
    color = "#FF6D96"
    link = "/connect"
    background = "#FCEADE"
    ></FeatureBk>

    <FeatureRev
    image = "./images/microfeature@2x.png"
    tag = "UI DESIGN"
    title = "Microscholarships"
    text = "A pivot from Peerlift:  enabling anyone to create and win scholarships."
    shade = "46, 141, 241, 0.5"
    color = "#2e8df1"
    link = "/case"

    ></FeatureRev>


    <Feature
    image = "./images/RCfeature@2x.png"
    tag = "PRODUCT DESIGN"
    title = "RandomCoffee"
    text = "Designing for authentic connection in the workplace, while based in Paris, France."
    shade = "0, 206, 161, 0.5"
    color = "#00cea1"
    link = "/random"
    ></Feature>

   

  
    <Footer/>

    

    </div>
  );
}
}
export default App;
