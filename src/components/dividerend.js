import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'


const CaseDividerEnd = styled.div`
    background-color: ${props => props.color};
    color: ${props => props.textcolor};

    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 2em;


`;


const DividerEnd = ( { color, textcolor} ) => {

  return(
    <CaseDividerEnd color = {color} textcolor = {textcolor}>  </CaseDividerEnd>

  )
}

export default DividerEnd;