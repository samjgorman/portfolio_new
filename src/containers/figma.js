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
     textOne = "Crafting a redesign that makes discovery and creation of Figma Plugins accessible. "
     textTwo = "Extending the power of plugin creation to designers on Figma."
     image = "./images/test prod@2x.png"
     color = "black"
     ></Hero>

    <Quote
    text = "I took on the challenge to redesign the Figma plugin experience as part of the product design application for Kleiner Perkins Fellows.  The prompt: ''Redesign a feature of a KPCB company’s product’’."
     color ="#1bc47d"
     ></Quote>

    <Title
    text = "Duration"
    tag = "August 2019"
    color = "#1bc47d"
    ></Title>

    <Paragraph
    text = "A four-day sprint."
    ></Paragraph>

    <Title
    text = "Role"
    ></Title>

    <Paragraph
    text = "I started with user research and interviewed designers about how they use design tools.  Then, I built low, medium, and high-fidelity prototypes, finishing with an interactive prototype on Figma.  "
    ></Paragraph>


    <Title
    text = "An Introduction"
    ></Title>

    <Paragraph
    text = "Okay yeah, Figma is pretty cool.  The Google Docs of design lives up to its name.  Personally though, I'm more of a Sketch user, in part because of the powerful community Sketch has grown and the array of plugins the app offers. "
    ></Paragraph>

    <Paragraph
    text = "When Figma released plugins this August, 2019, I got excited."
    ></Paragraph>


    <Title
    tag = "THE PROBLEM"
    color = "#1bc47d"
    text = "It's challenging to find the right Figma plugin for the right use case, and the plugin creation flow is unclear."
    ></Title>


    <Quote
    text = "If you can build a website, you should be able to make a plugin."
    color ="#1bc47d"
    ></Quote>

    <Title
    tag = "USER RESEARCH"
    color = "#1bc47d"
    text = "Who might use a plugin on Figma?"
    ></Title>

    <Paragraph
    text = "I interviewed three designers for 30 or so minute chats about what their design tools mean to them.  I also scoured the Figma Product Blog to understand who they wanted their users to be.  From this research, I created three user personas.  "
    ></Paragraph>

    <SmallImage
      image = "./images/figma-users@2x.png"
     ></SmallImage>

    <SmallImage
      image = "./images/davidsad@2x.png"
     ></SmallImage>

    <SmallImage
      image = "./images/shalinsad@2x.png"
     ></SmallImage>

    <SmallImage
      image = "./images/michellesad@2x.png"
     ></SmallImage>





     <SmallImage
      image = "./images/test prod@2x.png"
      caption = "Discover people who match the skills you’re searching for."
     ></SmallImage>

    <SmallImage
      image = "./images/figma-home@2x.png"
      caption = "The full plugin home page."
     ></SmallImage>

<SmallImage
      image = "./images/figma-sketches@2x.png"
      caption = "Bad handwriting or folksy charm?."
     ></SmallImage>


   

     

    <Footer/>

    </div>
  );
}
}
export default Figma;
