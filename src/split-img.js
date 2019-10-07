import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './split-img.css';
import Title from "./components/title";



//MQ here at 500px 
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 20%;
    margin-left: 20%;
    margin-top: 2em;
    margin-bottom: 2em;
    
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
    font-size: 28px;
    line-height: 1.4;
    font-weight: 600;
    margin-bottom: 1em;

`;

const Text = styled.div`
    color: #3a3a3a;
    font-family: Open Sans;
    font-weight: 800;
    font-size: 22px;
    margin-bottom: 1em;
    padding-right: 2em;
    @media (max-width: 800px) {
      padding-right: 0em;    
     }
   

`;

const TextWrapper = styled.div`
     display: flex;
     flex-direction: column;
    padding-top: 5em;
    padding-bottom: 5em;

    @media (max-width: 800px) {
     padding-bottom: 2em;
     padding-top: 4em;
     padding-right: 0em;
      
    }
`;

const SplitImage = ( {textOne, textTwo,image, color, header} ) => {
  return(
    <Wrapper> 
      <TextWrapper>
        <CaseTitle text = {header}> {header}  </CaseTitle>
        <Text textOne = {textOne} color = {color}> {textOne} </Text>
        <Text textTwo = {textTwo} color = {color}> {textTwo} </Text>
      </TextWrapper>
      <img className = "split-img" src ={require(`${image}`)} /> 
    </Wrapper>
  )
}

export default SplitImage;

