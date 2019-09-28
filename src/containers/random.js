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
     textOne = "Working as RandomCoffee's first product designer #1 in Paris, France."
     textTwo = "Built IOS and web prototypes to help people in business authentically connect."
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

    <Paragraph
    text = "I hopped on a handful of user interviews to get fast feedback on a prototype made on Sketch, and connected through Invision.  The users I spoke to, primarily HR professionals in longstanding enterprise companies, got excited."
    ></Paragraph>

    <Quote
     text = "“I like it a lot. This is incredibly helpful.” — HR coordinator at Pearson "
     color = "#0D179B"
     ></Quote>

     <Paragraph
     text = "Users’ top concern? Inputting these skills. It had the potential to take too long, and updating these skills could become a pain. Plus, no company has these skills on file, so the success of the prototype depends on the ease of obtaining information on skills from colleagues. So, we needed to show our value first, and then gradually nudge users to complete this information.Below, after meeting a colleague, users are prompted to share the top skills and competencies they believe their co-worker possesses."
     >
     </Paragraph>

     <SmallImage
     image = "./images/share.png"
     caption = "Leveraging other people to profile employees' skills."
     > </SmallImage>


    <SmallImage
     image = "./images/skills.png"
     caption = "Progressively share skills directly in-app."
     > </SmallImage>

    < Title
     text = "Integration into current product"
     tag = "PROTOTYPES"
     color = "#F5A623"
     ></Title>

     <Paragraph 
     text = "We wanted to test this concept with real users fast — and we were looking at much less engineering time by integrating these concepts in the current product vs building the standalone app I prototyped. I was looking to explore the following two hypotheses."
    ></Paragraph>

    <Paragraph
    text = "1) Employees in large companies want to directly contact colleagues they may not know, but who share skills they wish to learn about."
    ></Paragraph>

    <Paragraph
    text = "2) Employees acting as administrators for their colleagues aren’t necessary. Instead, enable people to directly contact others they’re interested in connecting with."
    ></Paragraph>

    <Paragraph
    text = "From their RandomCoffee dashboard, users can directly request an introduction. Before, they had to wait for the next wave of introductions several weeks apart, as specified by an administrator.  However, we received feedback suggesting that enabling a direct introduction as well might positively impact the user experience, so co-workers had the option to instantly get an introduction as soon as they entered the platform."
    ></Paragraph>

    <FullImage
    image = "./images/screen@2x.png"
    ></FullImage>

  

    <Divider
     title = "🤓 Learnings"
     color = "#0D179B"
     textcolor = "white"
     ></Divider>

    < Title
     text = "Invest in making your team a social home"
     tag = "ONE"
     color = "#F5A623"
     ></Title>


    <Paragraph
     text = "At RC, everyone eats together, every day. Everyone takes at least an hour to eat and recharge at lunch. And everyone is invited to grab drinks every week, not as colleagues, but as friends. This sort of informal, friendly culture builds authentic connection between employees every day, every meal. Us American workaholics could really take a page from our friends across the Atlantic here."
     > </Paragraph>


    < Title
     text = "Don’t get ready, get started. Build a prototype-interview-iterate workflow."
     tag = "TWO"
     color = "#F5A623"
     ></Title>


    <Paragraph
    text = "I’m guilty of doing too many user interviews to understand the problem before building. I’ve probably done 100+ interviews by now, and I’ve noticed a trend of these conversations leading to more actionable insights after presenting a prototype or rough idea. If I could restart at RC, I would create prototypes from the initial set of hypotheses we had on week one, instead of waiting until week two or so to mock up our first interfaces.    "
     > </Paragraph>


     < Title
     text = "Data is a designer’s best friend"
     tag = "THREE"
     color = "#F5A623"
     ></Title>

    <Paragraph
     text = "Yeah, qualitative is cool, but design doesn’t have to be a dark art. With services like Amplitude and Segment, I was able to quickly create charts around user churn, growth and understand where users got blocked. I introduced Fullstory to the team, which lets you see exactly how your users interact with your product in real-time. We integrated Fullstory into our product cycle to evaluate the UX and value of each feature we shipped."
     > </Paragraph>

    < Title
     text = "Working in a foreign language forces deliberation of thought."
     tag = "FOUR"
     color = "#F5A623"
     ></Title>

    <Paragraph
    text = "Writing, interviewing and communicating in French forced me to plan ahead, and be crystal clear on the message I wanted to deliver. I’m much more freewheeling and spontaneous in English, and taking this step back enabled me to add more of a methodology and structure to my work."
     > </Paragraph>

     <DividerEnd
     color = "#0D179B"
     textcolor = "white"
     >
     </DividerEnd>

     < Title
     text = "🚀 Recap + the future"
     color = "#F5A623"
     ></Title>

    <Paragraph
    text = "Over eight weeks, I launched and led our user research. More than twenty user interviews led us to identify a potentially larger opportunity space — and make the transition from helping colleagues meet each other, to helping colleagues understand the hidden talent in their own company. This led to creating a prototype for what RandomCoffee can become in the near future, and new product features that let us test these hypotheses now."
     > </Paragraph>

     <Paragraph
     text = "Working in French, in the middle of Paris, made my experience challenging, but rewarding.  I'm coming away from these 3 months with more confidence in my ability to lead human-centered interviews with users, and shift from insights to wireframes to code rapidly."
    ></Paragraph>

     

    <Footer/>

    </div>
  );
}
}
export default Random;
