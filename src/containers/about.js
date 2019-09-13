import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './about.css';
import Footer from "../footer";
import MyNavbar from "../components/nav";
import sam from '../images/sam.jpg';
import Paragraph from "../components/paragraph";



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
    margin-bottom: 1em;
    width: 10em;

    @media (max-width: 1200px) {
       font-size: 35px;
  
         
       }

`;

const Text = styled.div`
    color: #3a3a3a;
    font-family: Open Sans;
    font-weight: 400;
    font-size: 18px;
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
border-top-color:#FF3560;
border-top-width: 2em;



`;

const InfoWrapper = styled.div`
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


const About = ( ) => {
  return(
    <React.Fragment> 

    <MyNavbar/>
    <Wrapper> 
      <TextWrapper>
        <CaseTitle > I’m interested in community.  </CaseTitle>
        <Text> I’m a designer, entrepreneur, and junior at Stanford who cares about people-powered action.  It’s why I built Peerlift, a startup that’s helped 60,000 students find scholarships for college.   And it’s why I spent time in Paris this year as product designer #1 at an early-stage French startup.  New language, new culture, same mission. </Text>
      </TextWrapper>
      <ImageWrapper> <img className = "about-img" src ={sam} />   </ImageWrapper>
    </Wrapper>

    <Bar/>
    <InfoWrapper> 
        <Info> <b> I believe it’s crazy important to know how to ship my own products with code. </b> I built Peerlift with React, Express, MongoDB and Node.JS this summer.  Was sometimes lost in a hellhole of Medium articles and Youtube tutorials, but I learned how to ship products from making Sketch wireframes to writing post-build scripts.</Info>
        <Info> <b>I love learning languages, because they open doors to different ways of thinking.</b>   I taught myself French and German by talking to people and learning from them.  </Info>
        <Info> <b> My digital life is waaay more organized than my personal one.  </b>I love tools like Notion, Asana and Slack to help teams stay crystal clear.  This website is the result of a spec.
</Info>
    
    </InfoWrapper>
    <Footer/>
    </React.Fragment>

  )
}

export default About;
