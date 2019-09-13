import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import Button from "./components/button";
import './feature.css';

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

    @media (max-width:1200px) {
      padding-right: 0em;
      font-size: 16px;

      width: 100%;
     }
`;

const TextWrapper = styled.div`
     display: flex;
     flex-direction: column;
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

const Tag = styled.div`
font-family: Oxygen;
  font-size: 12px;
  font-weight: bold;

`;

const Feature = ( {title, text, color, image, tag, shade} ) => {
    return(
        <Wrapper> 
        <TextWrapper>
          <Tag> {tag}</Tag>
          <CaseTitle > {title}  </CaseTitle>
          <Text> {text} </Text>
          <Button
            shade = {shade}
            color = {color}
            text = "Learn more"
        ></Button>
        </TextWrapper>
       
        <ImageWrapper> <img className = "about-img" src ={require(`${image}`)} />   </ImageWrapper>
      </Wrapper>
    )
  }
  
  export default Feature;
  