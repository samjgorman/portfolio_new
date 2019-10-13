import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import Button from "./components/button";
import './feature.css';
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20%;
    margin-right: 20%;
    padding-top: 4em;
    padding-bottom: em;
    
    @media (max-width: 500px) {
      flex-direction: column;
      margin-right: 2em;
      margin-left: 2em;
      padding-bottom: 2em;
      padding-top: 2em;
      
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
    margin-bottom: 25px;
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
    margin-bottom: 2em;
    padding-right: 2em;
    line-height: 2;
    overflow-wrap: break-word;


    @media (max-width:1200px) {
      padding-right: 0em;
      font-size: 16px;

     }
`;

const TextWrapper = styled.div`
     display: flex;
     flex-direction: column;
    padding-bottom: 5em;
    padding-right: 5%;
    width: 30em;


    @media (max-width: 800px) {
     padding-bottom: 4em;
     padding-top: 4em;
     padding-right: 0em;
     width: 100%;
      
    }
`;

const ImageWrapper = styled.div`

margin-right: 20%;
flex-shrink: 0;
`;

const Tag = styled.div`
font-family: Oxygen;
  font-size: 12px;
  font-weight: bold;

`;

const Feature = ( {title, text, color, image, tag, shade, link} ) => {
    return(
        <Wrapper> 
        <TextWrapper>
          <Tag> {tag}</Tag>
          <CaseTitle > {title}  </CaseTitle>
          <Text> {text} </Text>
          <Link to = {link}> 
          <Button
            shade = {shade}
            color = {color}
            text = "Learn more"
            link = {link}
        ></Button>
        </Link>
        </TextWrapper>
       
        <ImageWrapper> <img className = "feature-img" src ={require(`${image}`)} />   </ImageWrapper>
      </Wrapper>
    )
  }
  
  export default Feature;
  