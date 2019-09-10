import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './hero.css';


const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
`;

const Text = styled.div`
    color: ${props => props.color};
    font-weight: 800;
    font-size: 32px;

    
`;

const Image = styled.div`
    margin-top: 1em;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Hero = ( {textOne, textTwo,image, color} ) => {
  return(
    <Wrapper> 
      <TextWrapper> 
        <Text textOne = {textOne} color = {color}> {textOne} </Text>
        <Text textTwo = {textTwo}> {textTwo} </Text>
      </TextWrapper>
      <img className = "hero-img" src ={require(`${image}`)} /> 
    </Wrapper>
  )
}

export default Hero;


