import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const CaseTitle = styled.div`
    color: ${props => props.color};
    font-weight: 900;
    font-family: Overpass;
    font-size: 3.5em;
    margin-left: 3vw;
    margin-right: 3vw;


    @media (max-width: 800px) {
       font-size: 2.5em;
       margin-left: 7vw;
       margin-right: 7vw;
        
      }

`;

const Header = ( {title, color} ) => {
  return(

    <CaseTitle color = {color}> {title} </CaseTitle>
  )
}

export default Header;


