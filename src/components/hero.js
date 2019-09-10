import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const Text = styled.section`
    background-color: ${props => props.color};
`;

const Image = styled.section`
margin-top: 1em;
`;

const Hero = ( {textOne, textTwo,image} ) => {
  return(
    <React.Fragment> 
              console.log({image})

    <Text textOne = {textOne}> {textOne} </Text>
    <Text textTwo = {textTwo}> {textTwo} </Text>
    </React.Fragment>
  )
}

export default Hero;


