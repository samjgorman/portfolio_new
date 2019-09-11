import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './small-img.css';

const Caption = styled.div`
    text-align: center;
    font-family: Overpass;
    font-size: 16px;
    margin-bottom: 1.5em;
    font-style: italic;
    color: #5F5F5F;

`;


const SmallImage = ( {image, caption, color} ) => {
  return(
      <React.Fragment> 
      <img className = "small-img" src ={require(`${image}`)} /> 
      <Caption > {caption} </Caption>
      </React.Fragment>
  )
}

export default SmallImage;
