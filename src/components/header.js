import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const CaseTitle = styled.h1`
    background-color: ${props => props.color};
`;

const Header = ( {title, color} ) => {
  return(

    <CaseTitle color = {color}> {title} </CaseTitle>
  )
}

export default Header;


