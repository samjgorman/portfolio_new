import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './full-img.css';

const Caption = styled.div`
    text-align: center;
    font-family: Overpass;
    font-size: 16px;
    margin-bottom: 1.5em;
    font-style: italic;
    color: #5F5F5F;

`;

const FullImage = ( {image, color, caption} ) => {
  return(
      <React.Fragment> 
        <img className = "full-img" src ={require(`${image}`)} /> 
        <Caption > {caption} </Caption>
      </React.Fragment>

  )
}

export default FullImage;

