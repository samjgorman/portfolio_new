import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './split-img.css';

//MQ here at 500px 
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 20%;
    margin-left: 20%;
    
    @media (max-width: 500px) {
      flex-direction: column;
      margin-right: 2em;
      margin-left: 2em;
      
    }

    @media (max-width: 800px) {
    }
`;

const Header = styled.div`
`;

const Text = styled.div`
    color: ${props => props.color};
    font-family: Overpass;
    font-weight: 800;
    font-size: 26px;
    margin-bottom: 1em;
    padding-right: 2em;
    @media (max-width: 800px) {
      padding-right: 0em;
       
     }
   

`;

const Image = styled.div`
    margin-top: 1em;
`;

const TextWrapper = styled.div`
     display: flex;
     flex-direction: column;
    padding-top: 5em;
    padding-bottom: 5em;

    @media (max-width: 800px) {
     padding-bottom: 4em;
     padding-top: 4em;
     padding-right: 0em;
      
    }
`;

const SplitImage = ( {textOne, textTwo,image, color, header} ) => {
  return(
    <Wrapper> 
      <TextWrapper>
        <Header> {header} </Header>
        <Text textOne = {textOne} color = {color}> {textOne} </Text>
        <Text textTwo = {textTwo} color = {color}> {textTwo} </Text>
      </TextWrapper>
      <img className = "split-img" src ={require(`${image}`)} /> 
    </Wrapper>
  )
}

export default SplitImage;

