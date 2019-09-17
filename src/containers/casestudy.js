import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../components/header";
import Divider from "../components/divider";
import Hero from "../hero";
import FullImage from "../full-img";
import SmallImage from "../small-img";
import SplitImage from "../split-img";
import DividerEnd from "../components/dividerend";


import Paragraph from "../components/paragraph";
import Title from "../components/title";
import Quote from "../components/quote";
import Footer from "../footer";
import MyNavbar from "../components/nav";





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
    <MyNavbar> </MyNavbar>
     <Header
     title = "Microscholarships"
     color = "#85c7ff"
     ></Header>

     <Hero
     textOne = "Built a tech non-profit with 60,000 users."
     textTwo = "Pivoted to a platform to connect college students in need"
     image = "./images/d-pl-3@2x.png"
     color = "#85c7ff"
     ></Hero>

     <Quote
     text = "I co-founded Peerlift last year, a tech nonprofit that lets anyone create a micro-scholarship, and enables college students in need to apply and win on our site. Before building a marketplace, Peerlift was a database of resources for college, and we grew to 45,000 users and 175,000 pageviews within a year.  This case study goes deep into the UI and technical decisions I made creating Peerlift's micro-scholarship platform over three weeks in August 2018. I was working full-time in San Francisco on Peerlift with my co-founders, and we were part of the Fast Forward Accelerator, where we received $25,000, mentorship, and support."
     color = "#85c7ff"
     ></Quote>

     <Title
      text = "Build a platform to enable anyone to quickly create a micro-scholarship, and let students apply and win directly on the platform."
      tag = "GOAL"
      color = "#EABA04"
     ></Title>

    <FullImage
    image = "./images/pl-ui@2x.png"
    caption = "Mobile view of the launchpage for microscholarships."
    ></FullImage>

    <Paragraph
    text = "This was a big product- essentially, build a marketplace from scratch. As this marketplace had two sides, I would have to design and build for the needs of each target group - working professionals and college students in financial need, and minimize the friction between their interactions. I made the decision to focus on the donor's needs first, because as the supply in our marketplace, they were critical to getting initial traction. This case study focuses on the main donor flows I worked through, because they were the most challenging problems I experienced."
     ></Paragraph>

    < SmallImage
     image = "./images/final.gif"
     caption = "Overview of desktop launch page."
     > </SmallImage>

    <Divider
     title = "Flow one: Create a micro-scholarship in under five minutes"
     color = "#ffd692"
     ></Divider>


    < Title
     text = "Enable prospective donors to quickly and easily create a micro-scholarship in under five minutes. "
     tag = "GOAL"
     color = "#EABA04"
     ></Title>

    <Paragraph
    text = "Most working professionals we spoke to believed that creating their own scholarship was financially out of reach. However, following through on that action created strong feelings of fulfillment and achievement."
    ></Paragraph>

    <Paragraph
    text = "To break this fear, the scholarship creation flow had to assume zero knowledge about scholarships, and abstract away any non-essential information to leave donors feeling in control."
    ></Paragraph>

    <Title 
    text = "Low-fidelity prototypes"
    ></Title>

    <SmallImage
     image = "./images/criteria v1.png"
     caption = "The initial prototype for the creation phase."
     > </SmallImage>

    <SplitImage
      header = "Learnings for medium-fi"
      textOne = "Make it clear that users can choose criteria for their micro-scholarship, but they don't have to."
      textTwo = "Provide context of how a donor's scholarship will impact students whenever possible."
      image = "./images/donor choices.png"
      color = "#85c7ff"
     > </SplitImage>

    <Title 
    text = "Medium-fidelity prototypes"
    ></Title>

    <Paragraph
    text = " I created a series of wireframes to map out the actual flow, and then connected them together with Invision. For feedback, I walked through the creation process with professionals that I contacted and met with at Box, Airbnb, Okta, Google, and Docusign."
    ></Paragraph>

    <FullImage
    image = "./images/mid-fi flow.png"
    ></FullImage>

    <Title
    text = "Determining criteria for a micro-scholarship:"
    tag = "SECTION ONE"
     color = "#EABA04"
    ></Title>

<   Paragraph
    text = "Here’s what I quickly learned wasn’t working."
    ></Paragraph>

    <SmallImage
     image = "./images/criteria v3.png"
     caption = "The initial prototype for the creation phase."
     > </SmallImage>

     <Paragraph
     text = "From that feedback, I created another flow over the next day and a half, and significantly reduced the length of the creation experience. The criteria page now was a single page, instead of a four-page long click-through experience."
     ></Paragraph>

     <FullImage image = "./images/build scholarship.png"/>
     
     <Paragraph
     text = "Awesome - the scholarship creation form was now a fraction of its original length, and provided context on where their award would go."
     ></Paragraph>

    <Title
    text = "Preview a user's micro-scholarship"
    tag = "SECTION TWO"
     color = "#EABA04"
    ></Title>

    <Paragraph
    text = "This page served duel roles for the user and Peerlift - for the user, they receive an elegant, in-context view of what their micro-scholarship would look like when they confirm. For Peerlift, this was our opportunity to get buy-in on a transaction fee.Since the donor was doing a charitable act, I had to design carefully around the presentation of a fee between 10–15%."
    ></Paragraph>

    <SmallImage
     image = "./images/fee.png"
     caption = "The initial prototype for the creation phase."
     > </SmallImage>

     <Paragraph
     text = "Users craved more information around what the fee would go towards, and some expressed frustration at a fee being forced upon them. Rather than forcing a hidden fee on users, I prototyped enabling donors to decide whether they would cover a platform fee, or reduce that amount from their micro-scholarship, essentially passing that charge to the student."
     ></Paragraph>

    <SmallImage
     image = "./images/fee 2-min.png"
     caption = "The initial prototype for the creation phase."
     > </SmallImage>

    <Paragraph
    text = "The response from the following 10+ potential donors I demoed our progress to was incredibly positive (yay!). They appreciated having a voice in where the fee went, and 10/10 chose to cover the platform fee themselves."
    ></Paragraph>

    <Title
    text = "High-fidelity prototypes"
    tag = "WRAP-UP"
     color =  "#FFB7CB"
    ></Title>

     <FullImage
    image = "./images/final flow.png"
    ></FullImage>

    <Divider
     title = "Flow two: Watch and choose a winner for the scholarship you create"
     color = "#ffd692"
     ></Divider>

    < Title
    text = "Create a streamlined process and visual display for donors to compare applicants and select a winner."
     tag = "GOAL"
     color = "#EABA04"
     ></Title>


    < Title
     tag = "BACKGROUND"
     color = "#fe938c"
     ></Title>

    <Paragraph
    text = "Students apply to micro-scholarships on Peerlift with 1–2 minute long, Snapchat-style videos, in response to a question the donor selects. Each donor receives between 8 and 15 applicants."
     ></Paragraph>

     <Paragraph
     text = "I started by imagining what an 11/10 experience would be for a donor making a decision, with a quick (and definitely messy) storyboard."
     ></Paragraph>

    <SmallImage
     image = "./images/comic 1.jpg"
     caption = "We learned that users prefer a high-fidelity prototype."
     > </SmallImage>

   <Paragraph 
   text = "With ideas swirling around, I asked the team to each record a short video of themselves to a given prompt, as if they were applying to a scholarship. We then came together to decide who should win. Even in such a low-stakes, no tech setting, some things became immediately important to design for."
   ></Paragraph>

    <Paragraph
    text = "1.  Authenticity and passion were immediate signals of quality candidates."
     ></Paragraph>

    <Paragraph
    text = "2.  Decision making was qualitative and criteria varied across individuals."
     ></Paragraph>

    <Paragraph
    text = "3.  The direct nature of watching videos of real students, and awarding real money, is memorable and emotionally charged."
     ></Paragraph>

    <Title 
    text = "Medium-fidelity prototypes"
    ></Title>

    <SmallImage
     image = "./images/choose early-min.png"
     caption = "The initial prototype for the creation phase."
     > </SmallImage>

     <Paragraph 
     text = "The decision to display multiple candidates in one view was well received, but people felt very uncomfortable at having to rate students on a star scale they would normally reserve for their UberEATS driver or Airbnb host."
     ></Paragraph>

    <Title 
    text = "High-fidelity prototypes"
    ></Title>

    <SmallImage
     image = "./images/choose early 2.png"
     caption = "The initial prototype for the creation phase."
     > </SmallImage>

     <FullImage
    image = "./images/choose black.png"

     ></FullImage>


     

    

    <Divider
     title = "🤠 Learnings"
     color = "#ffd692"
     ></Divider>


    < Title
     text = "Be vigilant about getting lost in the weeds for visual design on time-sensitive projects.     "
     tag = "ONE"
     color = "#EABA04"
     ></Title>

    <Paragraph
    text = "This is the equivalent of writing beautiful, elegant, robust code on a time crunch — yes, it’s important, but it’s often a lot more important to ship the product on time. With design, it’s easy to get lost adding flair to micro-interactions and visual assets, but at least on a design team of one for a product that shipped in 3 weeks, there was less of a place for that.    "
     ></Paragraph>

    
    <FullImage
     image = "./images/assets.png"
     > </FullImage>

    < Title
    text = "What worked for other products won’t necessarily work for my product."
     tag = "TWO"
     color = "#EABA04"
     ></Title>

    <Paragraph
    text = "This is the equivalent of writing beautiful, elegant, robust code on a time crunch — yes, it’s important, but it’s often a lot more important to ship the product on time. With design, it’s easy to get lost adding flair to micro-interactions and visual assets, but at least on a design team of one for a product that shipped in 3 weeks, there was less of a place for that.    "
     ></Paragraph>

     <DividerEnd
        color = "#ffd692"

     ></DividerEnd>

    <Footer/>

    </div>
  );
}
}
export default Case;
