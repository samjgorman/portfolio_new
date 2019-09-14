import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'


const CaseDivider = styled.h1`
    background-color: ${props => props.color};
    color: ${props => props.textcolor};

    padding-top: 3em;
    padding-bottom: 3em;
    padding-left: 2em;


`;


const Divider = ( {title, color, textcolor} ) => {

  return(
    <CaseDivider color = {color} textcolor = {textcolor}> {title} </CaseDivider>

  )
}

export default Divider;

