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
     image = "./images/figma-two.gif"
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

     <Title
     text = "From these users, it appeared there were three main problems with the current plugin design."
     ></Title>

    < Paragraph
     text = "1.  The lack of context on what plugins can and can't do make exploration difficult."
     ></Paragraph>

    <Paragraph
     text = "2.  It was challenging to find the right Figma plugin for the right use case."
     ></Paragraph>

    <Paragraph
     text = "3.  The product was falling short in supporting designers with ideas to create plugins."
     ></Paragraph>

     <Divider
        title = "Enabling exploration on Plugins home"
        color = "#5551FF"
        textcolor = "white"
     ></Divider>

    <SmallImage
      image = "./images/davidsad@2x.png"
     ></SmallImage>

    <SmallImage
      image = "./images/figma-home@2x.png"
      caption = "The full plugin home page."
     ></SmallImage>

    <Divider
        title = "Designing a context-based search "
        color = "#5551FF"
        textcolor = "white"
     ></Divider>



    <SmallImage
      image = "./images/shalinsad@2x.png"
     ></SmallImage>

    <SmallImage
      image = "./images/figma-two.gif"
      caption = "The full plugin home page."
     ></SmallImage>


    <Divider
        title = "Putting creators first: a source of truth for plugin development "
        color = "#5551FF"
        textcolor = "white"
     ></Divider>


    <SmallImage
      image = "./images/michellesad@2x.png"
     ></SmallImage>

  <SmallImage
      image = "./images/plugin.gif"
     ></SmallImage>


    <Quote
    text = "If you can build a website, you should be able to make a plugin."
    color ="#1bc47d"
    ></Quote>


     <SmallImage
      image = "./images/test prod@2x.png"
      caption = "Discover people who match the skills you’re searching for."
     ></SmallImage>

    <SmallImage
      image = "./images/figma-sketches@2x.png"
      caption = "Bad handwriting or folksy charm?."
     ></SmallImage>

    <Divider
        title = "Learnings"
        color = "#5551FF"
        textcolor = "white"
     ></Divider>

     <Title
     text = "Stay human-driven, no matter the timeline."
     tag = "ONE"
     color = "#1bc47d"
     ></Title>

    <Paragraph
    text = "I had four days to execute on this project.  There wasn't enough time to do the sort of intensive needfinding and synthesis I've gotten used to. "
    >
     </Paragraph>

     <Paragraph
     text = "This meant that I had to hack ways to build empathy with Figma's users.  This framing led me to interview fellow designers on day one of the project, reach out in community forums for feedback, and read spotlights on creators from Figma's blog. "
    >
     </Paragraph>


    <Title
     text = "Redesign, with 110% intention."
     tag = "TWO"
     color = "#1bc47d"
     ></Title>

     <Paragraph
     text = "Many designers critique external redesign projects, and they're not fully wrong.  I, Sam Gorman, am good designer (I think).  But I won't pretend I somehow have more insight during a four-day sprint than the entire product team of Figma combined."
    >
     </Paragraph>

     <Paragraph
     text = "I view the role of this redesign as a provocation, not a definitive answer.  I focused heavily on redesigning the UX, within the UI constraints Figma already established.  I hope this makes the redesign more feasible, and can spark more of a substantive product discussion on Figma Plugins."
    >
     </Paragraph>

    <DividerEnd
        color = "#5551FF"
     ></DividerEnd>



    <Footer/>

    </div>
  );
}
}
export default Figma;
