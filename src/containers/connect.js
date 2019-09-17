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
     image = "./images/pl final.gif"
     color = "#FF6D96"
     ></Hero>

     <Quote
     text = "This case study describes how I redesigned and rebuilt Peerlift, a platform I co-founded to connect high school students to scholarships. Before the rebuild, I scaled Peerlift to 60,000 users over 12 months. Here, I explain the decision to change, how I designed the new product, and how I shipped it in code."
     color ="#EABA04"
     ></Quote>

    <Title
    text = "Duration"
    tag = "August 2019"
    color = "#EABA04"
    ></Title>

    <Paragraph
    text = "Four weeks"
    ></Paragraph>

    <Title
    text = "Role"
    ></Title>

    <Paragraph
    text = "This was a solo project. I interviewed users, designed hi-fi prototypes on Sketch, then shipped a production web app with a MERN stack (Mongo DB, Express, Node.Js and React) over four weeks."
    ></Paragraph>

    <Paragraph
    text = "Julie Chen helped set the branding with the visual style she created for our images, and very grateful to Shalin Shah, Brian Zeng and Stack Overflow (!) for being on stand-by for questions on React."
    ></Paragraph>

    <Title
    text = "Motivated students in public high schools have difficulty discovering quality national scholarships to help them afford college."
    tag = "THE PROBLEM"
    color = "#FF6D96"
    ></Title>


    <Title
    text = "Users"
    ></Title>

    <Paragraph
    text = "I kept my design centered on three real-life Peerlift users."
    ></Paragraph>

    <SmallImage
    image = "./images/users@2x.png"
    ></SmallImage>

    <Paragraph
    text = "Miguel went to a big public high school in Los Angeles, struggled to find scholarships, now attends a UC, and wants to give back to his community. He's an ideal candidate to share content on Peerlift."
    ></Paragraph>

    <Paragraph
    text = "Amel is highly-driven, and is actively looking and apply for scholarships but it takes too much time. She wants a better way to find, search, and win."
    ></Paragraph>

    <Paragraph
    text = "Thalia is motivated for college, but wasn't sure where to start with the college process. Wants to apply to scholarships but not quite sure how to start."
    ></Paragraph>

    <Divider
    title = "Designing a people-powered brand."
    color = "#1493FF"
    textcolor = "white"
    ></Divider>

    <Title
    text = "Designing against the status quo."
    ></Title>

    <Paragraph
    text = "The most-visited scholarship sites are cluttered, confusing and clinical.  Students actually hate using them-- no exaggeration."
    ></Paragraph>



    <SmallImage
    image = "./images/competition@2x.png"
    caption = "Top competition is cluttered and clinical.  "
    ></SmallImage>


    <Title
    text = "Your scholarship search, but human 🤠"
    ></Title>

    <Paragraph
    text = "Think of Peerlift as the Glossier of scholarships. "
    ></Paragraph>

    <Paragraph
    text = "I wanted to capture the authenticity and community of Glossier with the simplicity of Intercom or Notion."
    ></Paragraph>

    <Paragraph
    text = "Peerlift needed to feel friendly, accessible, like a friend who just offered to help."
    ></Paragraph>

    <Paragraph
    text = "That's why I used real photos of real users and makers of Peerlift on our site. Showing the authentic selves of the people who live and love Peerlift humanizes the brand and builds student-to-student connection."
    ></Paragraph>
    <Title
    text = "Moodboard:"
    ></Title>
      
    <FullImage
    image = "./images/moodboard@2x.png"
    ></FullImage>

    <SplitImage
    header = "Radically simple & friendly."
    textOne = "A brand that talks like a human. "
    textTwo = "Immediately access useful content. "

    image = "./images/mobilehero@2x.png"
    ></SplitImage>

    <SmallImage
    image = "./images/laptop@2x.png"
    caption = "Highlighting how Amel won money on Peerlift helps other students believe they can too."
    ></SmallImage>

    



    <Divider
    title = "Designing a social product."
    color = "#1493FF"
    textcolor = "white"
    ></Divider>

    < Divider
    title = "Shipping a web app."
    color = "#1493FF"
    textcolor = "white"
    ></Divider>


    <SmallImage
    image = "./images/notion.png"
    caption = "I like to stay organized, and Notion boards like this helped me do that."
    ></SmallImage>

    < Divider
    title = "Learnings"
    color = "#1493FF"
    textcolor = "white"
    ></Divider>

    <DividerEnd
        color = "#1493FF"

    ></DividerEnd>

    <Footer/>

      </div>
    );
  }
  }
  export default Connect;
  