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
     textOne = "Building a human way to discover scholarships and summer programs. "
     textTwo = "Going from wireframes to fullstack development."
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

    <Title
    text = "Discovering content"
    ></Title>

    <Paragraph
    text = "Before users could add or share content, they needed to be able to easily discover relevant, interesting opportunities for them."
    ></Paragraph>

    <Paragraph
    text = "Users like Miguel and and Thalia explained how they often searched for scholarships on the go, or in class.  This drove my mobile-first design for Peerlift.  I designed for ease of use by only including critical information, limiting choice in filters, and crafting a minimalist, inviting aesthetic."
    ></Paragraph>

    <SmallImage
    image = "./images/mobilespread@2x.png"
    caption = "How mobile-users discover, filter and share opportunities with Peerlift."
    ></SmallImage>

    <Title
    text = "Sharing content with friends"
    ></Title>

    <Paragraph
    text = "Miguel explained how he wants to share information about opportunities with his friends.  However, many of these scholarship websites are difficult to use and outdated.  They're not the type of thing you enjoy sharing with a close friend of yours.  That's why I designed opportunity pages, or pages for each scholarship or summer program with critical information and a unique URL. "
    ></Paragraph>

    <Paragraph
    text = "Clicking share on an opportunity page copies the link to this page to your clipboard, making it easy to send a low-stakes snapshot of an opportunity to friends or family.  Peerlift gets the added benefit of introducing a new user to Peerlift first, and not an external URL."
    ></Paragraph>

    <SmallImage
    image = "./images/laptoppage@2x.png"
    caption = "After a user clicks share, the link to that opportunity page is copied to clipboard."
    ></SmallImage>


    <Title
    text = "Adding content to Peerlift"
    ></Title>

    <Paragraph
    text = "For Peerlift to work, students need to want to share quality scholarships or programs they know of.  I decided to prototype a simple add scholarship button above the content to validate that students wanted to share. "
    ></Paragraph>

    <Paragraph
    text = "For the future, I'll expand this to enable people to directly add their scholarship to the platform, and not only send their scholarship to a database I process.  However, I had to start smaller to move fast on development and ship this on time."
    ></Paragraph>


    <SmallImage
    image = "./images/add@2x.png"
    caption = "Users quickly add a scholarship at the top."
    ></SmallImage>



    < Divider
    title = "Shipping a web app."
    color = "#1493FF"
    textcolor = "white"
    ></Divider>

   

    <Paragraph
    text = "This section gets somewhat technical: I talk about the technical decisions I made and how I actually built the product. However, I'm staying high-level, and won't assume prior knowledge in software. I'm more interested in explaining my process for product-building in this case-study than getting in the weeds of the implementation."
    ></Paragraph>

    <Paragraph
    text = "I made all technical choices through the lens of what would enable me to build the fastest, and what would minimize the amount of code I needed to write. This was my first time shipping a full web app by myself, so there was lots of learning, failing, and Stack Overflow'ing along the way."
    ></Paragraph>

    <Title
    text = "Product management"
    ></Title>

    <Paragraph
    text = "I used Notion to spec out this project for myself, and kept running to-do's to stay efficient. I always use a tool like Notion or Asana when I've led small product teams in the past, and found it to be equally useful as an individual."
    ></Paragraph>


    <SmallImage
    image = "./images/notion.png"
    caption = "I like to stay organized, and Notion boards like this helped me do that."
    ></SmallImage>

    <SplitImage
    textOne = "Each task has corresponding to-do's. "
    textTwo = "All decisions are well-documented for reference."

    image = "./images/notiontodo.png"
    ></SplitImage>


    <Title
    text = "Front-end framework: React"
    ></Title>

    <Paragraph
    text = "For the front-end of the web-app, I chose React, a popular Javascript framework that enables developers to reuse components and easily manage the relationships between these components."
    ></Paragraph>


    <Title
    text = "Back-end framework: Node.js and Express"
    ></Title>

    <Paragraph
    text = "For the back-end of Peerlift, I chose Node.JS, with an Express server. Writing the full-application in Javascript enables easier integration between the front and back-ends of the app. Further, Express, a popular framework for Node.JS, abstracts away many more complicated server-side functions, and enables me to focus on building the app."
    >
    </Paragraph>

    <Title
    text = "Database: MongoDB Atlas with Mongoose"
    ></Title>

    <Paragraph
    text = "I chose MongoDB Atlas for our database - a noSQL database-in-the-cloud that offers a flexible data structure for changing data. Previously, I had used mySQL for Peerlift, which has rigid data schemes that limited ability to scale content. Using MongoDB meant I could define flexible data schemas with Mongoose, a popular library that enables definition of data schemas directly in my server-side Node.JS code. Faster development, less code - and everyone is happy."
    ></Paragraph>

    <Title
    text = "Production: Heroku"
    ></Title>

    <Paragraph
    text = "Finally, I deployed the production-build of Peerlift to Heroku, a platform-as-a-service that enables rapid deployment. Old Peerlift was hosted on Amazon Web Services (AWS), which offers lots of customization, but is often overly complex to ship an early iteration of a product."
    ></Paragraph>

    <Title
    text = "Why these technical decisions matter"
    ></Title>

    <Title
    tag = "FOR USERS"
    color = "#EABA04"
    ></Title>

    <Paragraph
    text = "Waaay faster load-times. Thanks to React, Peerlift was now a single-page-application, or SPA. That means the app only gets loaded once initially, and users then experience near-instantaneous load-times for all subsequent pages afterward. We love a fast website."
    ></Paragraph>

    <Title
    tag = "FOR PEERLIFT"
    color = "#FF6D96"
    ></Title>

    <Paragraph
    text = "Magnitudes easier to ship new features for users. The reusable nature of React meant that front-end changes are now much easier to make, with less code. No more 5,000 lines of main.css or chain of jQuery functions."
    ></Paragraph>

    <Title
    tag = "FOR PEERLIFT"
    color = "#FF6D96"

    ></Title>

    <Paragraph
    text = "Access to rapid feedback. Using these technologies let me ship the app in three weeks, instead of five or more. I optimized for frameworks that increased productivity and efficiency over frameworks that offered more granular control, but wasted time."
    ></Paragraph>


    < Divider
    title = "Learnings & Future"
    color = "#1493FF"
    textcolor = "white"
    ></Divider>

    <Title
    text = "The holy trinity of user-driven products on web are…"
    tag = "ONE"
    color = "#EABA04"
    ></Title>

    <Paragraph
    text = "Intercom, Fullstory, and Analytics. I use Intercom, a live chat tool, to ask real questions to real users, and then target those questions based off of events. Fullstory is a personal favorite - I can see in detail how users interact with the product in real-time, and quickly identify UI breakpoints. Analytics - either Google Analytics, Mixpanel, or Amplitude - are equally critical for event-tracking and measuring success. I push to release products early to real people so I can use these tools to measure and iterate on how we're performing."
    ></Paragraph>

    <Title
    text = "Don't get ready, get started."
    tag = "TWO"
    color = "#EABA04"
    ></Title>

    <Paragraph
    text = "Yes, I took this from an IDEO makathon I went to. But, it's true. I'm guilty of spending too much time researching before deciding on a technology to use. Vue? React? Angular, for a front-end framework? Ultimately, trying things out for myself lead to a much clearer answer than scouring Medium for two hours."
    ></Paragraph>

    <Title
    text = "The future: more features, more users, more fun."
    tag = "GOALS"
    color = "#FF6D96"
    ></Title>

    <Paragraph
    text = "I'm excited to build more ways to connect with users and enable sharing.  I'm now building out new ways for users to share scholarships, and prototyping what logged-in users could do.  I get to shift gears and work on the marketing side of Peerlift now as well.  This project was challeenging because I had to take charge of every end of the product experience, but it was worth it and I learned a ton."
    ></Paragraph>

    <Paragraph
    text = "Thanks for making it this far! 😇  Si hi if this interests you, and always happy to talk more and learn from you!"
    ></Paragraph>


    <DividerEnd
        color = "#1493FF"
        

    ></DividerEnd>

    <Footer/>

      </div>
    );
  }
  }
  export default Connect;
  