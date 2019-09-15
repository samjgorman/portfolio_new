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
     text = "This is an in-depth, design-driven look at the process behind pivoting a database for high school opportunities into a marketplace to connect college students with micro-scholarships. I describe the ideation process, building the platform, testing the platform, and the sometimes painful lessons I learned along the way"
     color = "#85c7ff"
     ></Quote>

    <FullImage
    image = "./images/pl-ui@2x.png"
    ></FullImage>

     <Title
     text = "User flow: Watch and choose a winner for the scholarship you create"

     ></Title>

     <Paragraph
     text = "The product I had built curated the top national scholarships, summer programs, awards and more, and streamlined the discovery process into a clean UI. High school students really liked Peerlift - despite the buggy code we quickly pushed out. Our user numbers were growing - not the sort of hockey stick growth I dreamed of, but growing - and was on pace to continue."
     ></Paragraph>

    <Paragraph
     text = "The product I had built curated the top national scholarships, summer programs, awards and more, and streamlined the discovery process into a clean UI. High school students really liked Peerlift - despite the buggy code we quickly pushed out. Our user numbers were growing - not the sort of hockey stick growth I dreamed of, but growing - and was on pace to continue."
     ></Paragraph>

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
    text = "Lo-fi prototypes"
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
    text = "Medium-fi prototypes"
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






    <Divider
     title = "Flow two: Watch and choose a winner for the scholarship you create"
     color = "#ffd692"
     ></Divider>

    < Title
     text = "Building for new users"
     tag = "BACKGROUND"
     color = "#fe938c"
     ></Title>

    <Paragraph
     text = "The product I had built curated the top national scholarships, summer programs, awards and more, and streamlined the discovery process into a clean UI. ."
     ></Paragraph>

     <SmallImage
     image = "./images/final.gif"
     caption = "We learned that users prefer a high-fidelity prototype."
     > </SmallImage>

   

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
