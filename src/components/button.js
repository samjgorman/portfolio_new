import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';


const CaseButton = styled.div`
    width: 240px;
    height: 72px;
    box-shadow: 0 12px 25px 0 rgba(${props => props.rgbacolor});
    background-color: ${props => props.color}
    color: white;

    :hover{
        box-shadow: 0 16px 35px 0 rgba(${props => props.rgbacolor});
        -webkit-transform: translateY(-1.5px);
        transform: translateY(-1.5px);
        cursor: pointer;
    }

    
   
`;

const CaseText= styled.div`
    font-family: Oxygen;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding-top: 1.2em;
    padding-bottom: 0.5em;
   
`;


const Button = ( {text, color, shade, link} ) => {
  return(
    <Link to = {link} > 
    <CaseButton rgbacolor = {shade} color = {color}>
        <CaseText>{text}</CaseText>
    </CaseButton>
    </Link>
  )
}

export default Button;
