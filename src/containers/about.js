import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './about.css';
import Footer from "../footer";
import MyNavbar from "../components/nav";
import sam from '../images/sam.jpg';
import Paragraph from "../components/paragraph";
import Social from "../components/social";
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';





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
font-family: Open Sans;
line-height: 34px;



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
        <Text>I’m a product designer, entrepreneur, and junior at Stanford <mark>who cares about people-powered action.</mark>   I get excited when I solve problems by helping people share with others.  It's why I co-founded Peerlift, a human way to search for scholarships, and helped 60,000 users find opportunities.   And it's why I spent time in Paris this year as the first product-designer at an early-stage French startup. New language, new culture, same mission.</Text>
      </TextWrapper>
      <ImageWrapper> <img className = "about-img" src ={sam} />   </ImageWrapper>
    </Wrapper>

    <Bar/>
    
    <InfoWrapper> 
        <Info> <b>I'm designing my own major at Stanford, in Interaction Design.</b>  Designing a design major is definitely my most meta experience at Stanford to date.  But it's exciting, because I can fuse the creative methodology of design with the hard skills of computer science to make compellingly useful things.  Which is why... </Info>
        <Info> <b> I believe it’s crazy important to know how to ship my own products with code. </b>  I built Peerlift with React, Express, MongoDB and Node.JS this summer instead of an internship. Was sometimes lost in a hellhole of Medium articles and Youtube tutorials, but I learned how to ship products from making Sketch wireframes to writing post-build scripts.</Info>
        <Info> <b>I love learning and teaching languages, because they open doors to different ways of thinking.</b>  I learned French and German mostly by talking to other people and watching YouTube.  Lots of Youtube.  Also traveled the world from my room on Skype as an online English teacher for three years, and learned that students in Siberia like Marvel comics just as much as I do.  </Info>
        <Info> <b> My digital life is waaay more organized than my personal one.  </b>  I literally organize my entire working and social life on Notion and Asana.  My friends tell me I should build a productivity tool next because-I-spend-so-much-time-making-lists.</Info>
    </InfoWrapper>


    <Footer/>
    </React.Fragment>

  )
}

export default About;
