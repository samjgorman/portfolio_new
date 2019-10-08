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
    tag = "October 2019"
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
    text = "When Figma released plugins this August, 2019, I got excited.  Compared to the mature plugin community on Sketch, Figma was a blank slate."
    ></Paragraph>

    <Paragraph
    text = " I chose this challenge because plugins are an applied definition of community-- people care enough about a product to extend what's possibile within it.  I care about starting digital communities in the products I work on, and this project felt like a fit.  As a designer and Figma user, I knew somewhat where to start (yay!), but kicked off with user research to understand who I was making for. "
    ></Paragraph>

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
        title = "Inviting exploration on Plugins home"
        color = "#5551FF"
        textcolor = "white"
     ></Divider>

    <SmallImage
      image = "./images/davidsad@2x.png"
     ></SmallImage>

    <Paragraph
     text ="When I interviewed a designer friend on how he uses Figma, this is what he told me."
     ></Paragraph>

     <Quote
     text = "''The first thing I did was search on Google for the top plugins I should download.''"
     color ="#1bc47d"
     ></Quote>

    <Paragraph
    text = "As a human, I love when the information given to me is organized.  But in the current UI, all I have for context on how a plugin can help me, is the number of installs and name.   "
     ></Paragraph>

    <Paragraph
    text = "That makes it tricky if I'm a user like Shalin, and I just want to explore how plugins could help me, with no particular problem in mind.  With no context or grouping, I'm in trouble."
     ></Paragraph>

    <Paragraph
    text = "That inspired the concept below for Plugins home-- adding groupings of top plugins in a visual UI."
     ></Paragraph>


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

    <Paragraph
     text = "Users like Shalin are used to searching for what they need, whether it's on Google or Stack Overflow.  He needs a fast way to search for the issue he's facing or the idea he has.  "
     ></Paragraph>

    <Paragraph
    text = "In the existing Figma UI, search isn't accessible on the plugin home page, and users can only search in the ''Browse All'' section by the plugin title. "
     ></Paragraph>

    <Paragraph
    text = "I added search to Plugin Home, and redesigned the search flow.  A user now never lands on a ''Browse All'' page, and rather can be taken to a category specific page, or search for an interest or problem of theirs.  Check out the flow below. "
     ></Paragraph>


    <SmallImage
      image = "./images/figma-two.gif"
      caption = "The full search flow."
     ></SmallImage>


    <Paragraph
    text = "I show users top categories when they open the search bar, which transitions to relevant plugin results once a user starts typing."
     ></Paragraph>


  <SmallImage
      image = "./images/figmasearch1@2x.png"
      caption = "Users are prompted to choose from categories when entering search."
     ></SmallImage>

  <SmallImage
      image = "./images/figmasearch2@2x.png"
      caption = "Context-driven search lets users search by problem or idea, not just plugin name."
     ></SmallImage>

  <SmallImage
      image = "./images/figmasearch3@2x.png"
      caption = "Results page for a search query."
     ></SmallImage>



    <Divider
        title = "Putting creators first: a source of truth for plugin development "
        color = "#5551FF"
        textcolor = "white"
     ></Divider>


    <SmallImage
      image = "./images/michellesad@2x.png"
     ></SmallImage>


    <Paragraph
    text = "On Figma's product blog, the team discussed their goal of making plugin creation more accessible to designers.  Their web-based API helps with that-- in fact, Figma stated the following as a core product principle for their design process."
    ></Paragraph>
    <Quote
    text = "If you can build a website, you should be able to make a plugin."
    color ="#1bc47d"
    ></Quote>

  <Paragraph
  text = "The painpoint I observed was that information on creating a plugin was decentralized across 3-4 channels.  "
    ></Paragraph>

  <SmallImage
      image = "./images/nosource@2x.png"
     ></SmallImage>

  <Paragraph
    text = "This made it difficult for designers like Michelle to know that plugins were crafted with designers in mind, and that this wasn't an activity only reserved for hardcore engineers or hackers."
  ></Paragraph>

  <Title
    text = "So, I centralized resources for plugins creators on Figma, with a few rules."
  ></Title>

<Paragraph
  text = "1.  Spotlight examples of top Figma plugins, without needing to leave the page."
  ></Paragraph>

<Paragraph
  text = "2.  Showcase the stories of designers who built successful plugins from diverse backgrounds, to encourage designers to built plugins too.  "
  ></Paragraph>

<Paragraph
  text = "3.  Create a community around Figma plugins and help creators help each other."
  ></Paragraph>

    <Title
      text = "Introducing Figma Creator Hub"
    ></Title>

    <SmallImage
      image = "./images/plugin.gif"
     ></SmallImage>

    <SmallImage
      image = "./images/pluginhub@2x.png"
      caption = "A static view of the Creator Hub"
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
