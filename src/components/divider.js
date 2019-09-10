import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'


const CaseDivider = styled.h1`
    background-color: ${props => props.color};
    padding-top: 3em;
    padding-bottom: 3em;
    padding-left: 2em;


`;


const Divider = ( {title, color} ) => {

  return(
    <CaseDivider color = {color}> {title} </CaseDivider>

  )
}

export default Divider;

