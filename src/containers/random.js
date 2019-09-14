import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../components/header";
import Divider from "../components/divider";
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

import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import seven from '../images/7.png';
import eight from '../images/8.png';
import nine from '../images/9.png';
import ten from '../images/10.png';



class Random extends Component {
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
     title = "RandomCoffee"
     color = "#3C9984"
     ></Header>

     <Hero
     textOne = "Built a tech non-profit with 60,000 users."
     textTwo = "Pivoted to a platform to connect college students in need"
     image = "./images/rc-final.gif"
     color = "#3C9984"
     ></Hero>

     <Quote
     text = "This is a case study on my experience working in Paris, France at a French startup, RandomCoffee, as their first Product Designer and employee #9 for three months this last spring. RandomCoffee breaks down silos in companies by matching employees together to chat over informal meetings."
     color = "#0D179B"
     ></Quote>

     <Divider
     title = "☕ Background and research:"
     color = "#3C9984"
     textcolor = "white"
     ></Divider>


     <Paragraph
     text = "When I joined in April, 2019, RandomCoffee (RC) had just come out Facebooks’s Paris Startup Garage program, grown to nine employees (including me!), and had bootstrapped by signing 25+ big French clients in their year of existence — including energy behemoth Total, infrastructure leader RATP, and food conglomerate Danone. The team had done this by focusing heavily on sales. However, they believed that shifting focus from sales to product would enable the company to improve its user retention & expand the value it offers to users. This is why I joined — to help grow a product-driven culture, and to launch our user research in order to deliver a product with significantly higher value for our users."
     ></Paragraph>

    <SmallImage
     image = "./images/prod.png"
     caption = "The existing product at RandomCoffee when I jumped in."
     > </SmallImage>

    < Title
     text = "🎯 Goals "
     ></Title>


     
     <Paragraph
     text = "1. Launch and take charge of user research at RandomCoffee"
     ></Paragraph>

    <Paragraph
     text = "2. Prototype outside of the scope of RC to expand the value of our product"
     ></Paragraph>

    <Paragraph
     text = "3. Support and build a user-first and product-driven culture at RC"
     ></Paragraph>

    < Title
     text = "❓ Understanding the problem"
     ></Title>

    <Paragraph
     text = "I took a stab at defining the problem we believed we were solving."
     ></Paragraph>

    <Quote
     text = " Coworkers in large companies have difficulty communicating with each other, as teams become siloed and employees stick to small, local networks they build over time."
     color = "#0D179B"
     ></Quote>

    <Divider
     title = "🔨 Prototyping solutions:"
     color = "#3C9984"
     textcolor = "white"
     ></Divider>

    < Title
     text = "An address book, for skills:"
     tag = "PROTOTYPES"
     color = "#F5A623"
     ></Title>

    <Paragraph
     text = "Employees search across the company by skills, people, or positions. This solves the problem our users told us, of “spending two-hours searching for an employee” on a company intranet, or “constantly only working with the same people.”"
     ></Paragraph>

     <SmallImage
     image = "./images/skill.png"
     caption = "Discover people who match the skills you’re searching for."
     > </SmallImage>

     <Paragraph
     text = " I then prototyped icebreakers and schedule-helping for users when contacting their colleagues. Many users expressed anxiety around how to contact coworkers they had not previously spoken with, so we looked to make it easy and intuitive to reach out to start a conversation."
     > </Paragraph>

    <FullImage
    image = "./images/message.gif"
    ></FullImage>

     <SplitImage
      header = "Peerlift has 175,000 page views, from 43,407 users"
      textOne = "This is a key point written in Open Sans as part of my portfolio template."
      textTwo = "Pivoted to a platform to connect college students in need"
      image = "./images/message.gif"
      color = "#85c7ff"
     > </SplitImage>

    <Footer/>

    </div>
  );
}
}
export default Random;
