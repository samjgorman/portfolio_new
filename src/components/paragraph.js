import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const CaseParagraph = styled.div`
    font-weight: normal;
    font-family: Open Sans;
    font-size: 21px;
    line-height: 34px;

    margin-left: 20%;
    margin-right: 20%;
    margin-top: 1em;
    margin-bottom: 1.5em;

    @media (max-width: 800px) {
       margin-left: 7vw;
       margin-right: 7vw;
        
      }

      @media (max-width: 500px) {
      font-size: 18px;
      line-height: 1.8;
         
       }

`;

const Paragraph = ( {text, color} ) => {
  return(

    <CaseParagraph > {text} </CaseParagraph>
  )
}

export default Paragraph;
