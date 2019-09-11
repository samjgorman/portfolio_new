import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../components/header";
import Divider from "../components/divider";
import Hero from "../hero";
import FullImage from "../full-img";
import SmallImage from "../small-img";
import Paragraph from "../components/paragraph";
import Title from "../components/title";
import Quote from "../components/quote";






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
     color = "#85c7ff"
     ></Header>

     <Hero
     textOne = "Built a tech non-profit with 45,000 users."
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

     <Divider
     title = "Prototyping solutions"
     color = "#ffd692"
     ></Divider>

     <Title
     text = "User flow: Watch and choose a winner for the scholarship you create"
     ></Title>

     <Paragraph
     text = "The product I had built curated the top national scholarships, summer programs, awards and more, and streamlined the discovery process into a clean UI. High school students really liked Peerlift - despite the buggy code we quickly pushed out. Our user numbers were growing - not the sort of hockey stick growth I dreamed of, but growing - and was on pace to continue."
     ></Paragraph>

    <Paragraph
     text = "The product I had built curated the top national scholarships, summer programs, awards and more, and streamlined the discovery process into a clean UI. High school students really liked Peerlift - despite the buggy code we quickly pushed out. Our user numbers were growing - not the sort of hockey stick growth I dreamed of, but growing - and was on pace to continue."
     ></Paragraph>

    < Title
     text = "Building for new users"
     ></Title>

    <Paragraph
     text = "The product I had built curated the top national scholarships, summer programs, awards and more, and streamlined the discovery process into a clean UI. ."
     ></Paragraph>

     <SmallImage
     image = "./images/derive@2x.png"
     > </SmallImage>

   

    </div>
  );
}
}
export default Case;
