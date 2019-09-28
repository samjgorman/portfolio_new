import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import Button from "./components/button";
import border from "./images/border@2x.svg";
import './feature.css';
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 8em;
    padding-bottom: 8em;
    padding-left: 10%;
    padding-right: 10%;

    margin-left: 10%;
    margin-right: 10%;

    background-color: ${props => props.background};
    
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

    @media (max-width: 1500px) {
        width: 40%;

    }

    @media (max-width:1200px) {
      padding-right: 0em;
      font-size: 16px;

      width: 60%;
     }

     @media (max-width:800px) {
        padding-right: 0em;
        font-size: 16px;
  
        width: 100%;
       }
`;

const TextWrapper = styled.div`
     display: flex;
     flex-direction: column;
    padding-left: 10%;
    width: 30em;
    margin-right: 20%;

    @media (max-width: 800px) {
     padding-bottom: 2em;
     padding-top: 4em;
     padding-right: 0em;
     width: 100%;
      
    }
`;

const ImageWrapper = styled.div`

flex-shrink: 0;
`;

const Tag = styled.div`
font-family: Oxygen;
  font-size: 12px;
  font-weight: bold;
`;

const FeatureRev = ( {title, text, color, image, tag, shade, link, background} ) => {
    return(
        <React.Fragment>
        <Wrapper background = {background}> 
        <ImageWrapper> <img className = "feature-img" src ={require(`${image}`)} />   </ImageWrapper>
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
       
       
      </Wrapper>
      
      </React.Fragment>
    )
  }
  
  export default FeatureRev;
  