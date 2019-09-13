import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'


const CaseButton = styled.div`
    width: 240px;
    height: 72px;
    box-shadow: 0 12px 25px 0 rgba(${props => props.rgbacolor});
    background-color: ${props => props.color}
    color: white;

    
   
`;

const CaseText= styled.div`
    font-family: Oxygen;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding-top: 1.2em;
    padding-bottom: 0.5em;
   
`;


const Button = ( {text, color, shade} ) => {

  return(
    <CaseButton rgbacolor = {shade} color = {color}>
        <CaseText>{text}</CaseText>
    </CaseButton>
  )
}

export default Button;
