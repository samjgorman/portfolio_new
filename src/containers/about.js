import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './about.css';
import Footer from "../footer";
import MyNavbar from "../components/nav";
import sam from '../images/sam.jpg';
import Paragraph from "../components/paragraph";
import Social from "../components/social";
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Fade from 'react-reveal/Fade';





//MQ here at 500px 
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: 20%;
    margin-right: 20%;
    
    @media (max-width: 500px) {
      flex-direction: column;
      margin-right: 2em;
      margin-left: 2em;
      
    }

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const CaseTitle = styled.div`

    font-weight: normal;
    font-family: Overpass;
    font-size: 3rem;
    line-height: 1.4;
    font-weight: 600;
    width: 10em;

    @media (max-width: 1200px) {
       font-size: 35px;
  
         
       }

`;

const Text = styled.div`
    color: #3a3a3a;
    font-family: Open Sans;
    font-weight: 400;
    font-size: 17px;
    margin-bottom: 1em;
    padding-right: 2em;
    line-height: 2;

    @media (max-width:1200px) {
      padding-right: 0em;
      font-size: 16px;

      width: 100%;
       
     }
`;

const TextWrapper = styled.div`
     display: flex;
     flex-direction: column;
    padding-top: 5em;
    padding-bottom: 5em;
    padding-right: 5%;
    width: 30em;

    @media (max-width: 1200px) {
      padding-top: 0em;
      width: 100%;
       
     }

    @media (max-width: 800px) {
     padding-bottom: 2em;
     padding-top: 4em;
     padding-right: 0em;
     width: 100%;
      
    }
`;

const ImageWrapper = styled.div`

margin-right: 20%;
flex-shrink: 0;
`;

const Bar = styled.div`
border-top-style: solid;
border-top-color:#E3E3E3;
border-top-width: 0.8px;
margin-left: 20%;
margin-right: 20%;

@media (max-width: 500px) {
  border-top-width: 1px;
     
   }

`;

const InfoWrapper = styled.div`
margin-top: 2em;
margin-left: 20%;
margin-right: 20%;
margin-bottom: 4em;
font-family: Open Sans;
line-height: 34px;
font-size: 17px;



@media (max-width: 800px) {
    margin-left: 2em;
    margin-right: 2em;
     
   }

   @media (max-width: 500px) {
   font-size: 18px;
   line-height: 1.8;
      
    }
`;

const Info = styled.div`
margin-top: 1.5em;
margin-bottom: 1.5em;
`;

const SocialWrapper = styled.div`
display: flex; 
flex-direction: row;
margin-top: 0.5em;
margin-bottom: 0.5em;


`;


const About = ( ) => {
  return(
    <React.Fragment> 

    <MyNavbar/>
    <Wrapper> 
      <TextWrapper>

   
        <CaseTitle > I’m interested in community.  </CaseTitle>

        <SocialWrapper> 
        <Social image = "fab fa-dribbble"
                link = "https://dribbble.com/samjgorman"/>
                <Social image = "fab fa-medium-m"
                link = "https://medium.com/@gormansam"/>
                <Social image = "fab fa-linkedin-in"
                link = "https://www.linkedin.com/in/gormansam/"/>
                 <Social image = "fab fa-github"
                link = "https://github.com/samjgorman"/>
        </SocialWrapper>
          <Text>I’m a product designer, entrepreneur, and junior studying at Stanford, and thinking about ideas that mobilize and empower groups.

I’m from Los Angeles, but spend more time in the Bay Area now.   I founded Peerlift, a really fast and intuitive way to find scholarships, and helped 60,000 user find opportunities.   Most recently,  I spent time in Paris as the first product designer at an early stage French startup, where I built their second product expansion.</Text>
      </TextWrapper>
      <CSSTransition
          in= {true}
          timeout={800}
          classNames= "fade"
          unmountOnExit
          appear = {true}
    >
      <ImageWrapper> <img className = "about-img" src ={sam} />   </ImageWrapper>

      </CSSTransition> 

    </Wrapper>

    <Bar/>
    
    <Fade> 
    <InfoWrapper> 
        <Info>I created my own major within the School of Engineering to study product design and computer science.   I’m calling it Interaction Design, because  I focus on understanding how we craft digital experiences from human-centered needfinding to production code.</Info>
        <Info> I like to block out chunks of time to start software projects, practice my French & German, experiment with mediums to bring people together, write Medium drafts that I don’t publish,  and pursue what I’m most curious about.  As of late, I’ve been thinking a lot about the incentive schemes behind open-source software development, and more broadly, how to engineer a digital community that solves problems together.</Info>
        <Info> I’ve grown passionate about shipping my own products in code, mostly through experience building fullstack apps with technologies like React and Vue.  As a factor of all that,  I’m super interested in how design and engineering will converge in the near future.</Info>
        <Info> If you find any of this interesting, or want to chat about crafting communities, engineering productivity, or the future of travel ( or maybe just want to say hi!),  drop a line to  sgorman at stanford.edu and let’s talk.  </Info>
    </InfoWrapper>
    </Fade>


    <Footer/>
    </React.Fragment>

  )
}

export default About;
